var babel = require("babel-core")

var installed = false

function install(options) {
  if (installed) {
    return
  }

  options = options || {}

  require.extensions[options.extension || '.jsx'] = function(module, filename) {
    var transformOptions = {
      ast: false,
      code: true,
      filename: filename,
      sourceMaps: false,
      retainLines: true,
      plugins: ["syntax-jsx", "transform-react-jsx"]
    }

    var code = babel.transformFileSync(filename, transformOptions).code

    if (typeof options.additionalTransform == 'function') {
      code = options.additionalTransform(code)
    }

    module._compile(code, filename)
  }

  installed = true
}

module.exports = {
  install: install
}
