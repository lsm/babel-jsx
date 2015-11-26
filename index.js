
var installed = false

function install(options) {
  if (installed) {
    return
  }

  var fs = require('fs')
  var Module = require('module')
  var _require = Module.prototype.require
  var jstransform = require('jstransform/simple')

  if ('string' === typeof options) {
    options = {
      extension: options
    }
  }

  options = options || {}

  Module._extensions[options.extension || '.jsx'] = function(module, filename) {
    if (!options.hasOwnProperty('react')) {
      options.react = true
    }

    var content = fs.readFileSync(filename, 'utf8')
    content = jstransform.transform(content, options).code
    module._compile(content, filename)
  }

  Module.prototype.require = function(filename) {
    if ('!' === filename.slice(-1)) {
      filename = filename.slice(0, -1)
    }
    return _require.call(this, filename)
  }

  installed = true
}

module.exports = install
