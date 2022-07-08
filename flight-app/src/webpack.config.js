/*module.exports = {
    resolve: {
        fallback: {
            assert: require.resolve('assert'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            stream: require.resolve('stream-browserify'),
            path: require.resolve("path-browserify"),
            zlib: require.resolve("browserify-zlib"),
        },
        node: undefined, 
    },
    
}; 

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    // Other rules...
    plugins: [
        new NodePolyfillPlugin()

    ],
    
} */

/*const nrwlConfig = require("@nrwl/react/plugins/webpack.js");

module.exports = (config, context) => {
  // first call it so that @nrwl/react plugin adds its configs
  nrwlConfig(config);

  return {
    ...config,
    node: undefined
  };
}; */

module.exports = {
    node: {
      fs: "empty"
    }
  }