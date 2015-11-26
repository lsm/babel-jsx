# babel-jsx

Transparently `require()` and transform jsx from node with babel.

## Usage

`require('babel-jsx').install()`

If you want to use a different extension, do:

`require('babel-jsx').install({extension: '.jsx!'})`

If you want to couple with an additional transform (such as CoffeeScript), do:

```javascript
var coffee = require('coffee-script');
require('babel-jsx').install({
  extension: '.coffee',
  additionalTransform: function(src) {
    return coffee.compile(src, {
      'bare': true
    });
  }
});
```

## Credit

Based on [node-jsx](https://github.com/petehunt/node-jsx) by [Pete Hunt](https://github.com/petehunt)
