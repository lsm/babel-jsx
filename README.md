# jsx-hook

Transparently `require()` and transform jsx from node using `jstransform`.

## Usage

`require('jsx-hook')()`

If you want to use a different extension, do:

`require('jsx-hook')('.jsx')`

or

`require('jsx-hook').install({extension: '.jsx'})`

Then in you code you can require jsx on the fly:

`require('view.jsx')`

or

`require('view.jsx!')`

## Why?

Babel is too slow as of version 6.2.1 for transforming jsx. Average 40 times slower than the `jstransform` implementation. That's very annoying if you have many jsx files.

Also `require('view.jsx!')` is very helpful if you share jsx between server/client side and using tools like jspm to do in-browser transforming for development.


## Credit

Based on [node-jsx](https://github.com/petehunt/node-jsx) by [Pete Hunt](https://github.com/petehunt)
