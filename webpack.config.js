
var path = require('path')
var webpack = require('webpack')

module.exports = {
  module: {
    // The first error I encountered was:
    //
    // ERROR in ./~/pixi.js/package.json
    // Module parse failed: /Users/michael/Projects/webpack-pixi/node_modules/pixi.js/package.json Line 2: Unexpected token :
    // You may need an appropriate loader to handle this file type.
    //
    // Apparently something in pixi.js requires its package.json file. So let's
    // teach webpack how to load JSON files. We could restrict this to only recognizing
    // .json files in the pixi.js directory, but this is a generally useful feature
    // that we might need elsewhere in our build.
    rules: [
      {
        test: /\.json$/,
        // We could restrict using json-loader only on .json files in the
        // node_modules/pixi.js directory, but the ability to load .json files
        // could be useful elsewhere in our app, so I usually don't.
        //include: path.resolve(__dirname, 'node_modules/pixi.js'),
        loader: 'json'
      }
    ]
  }
}
