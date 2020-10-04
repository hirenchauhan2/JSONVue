var path = require("path");
var config = require("../config");
var ExtractTextPlugin = require("mini-css-extract-plugin");

exports.assetsPath = function(_path) {
  var assetsSubDirectory =
    process.env.mode === "production"
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function(options) {
  options = options || {};

  var cssLoader = {
    loader: "css-loader",
    options: {
      minimize: process.env.mode === "production",
      sourceMap: options.sourceMap
    }
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    var loaders = [cssLoader];
    if (loader) {
      loaders.push({
        loader: loader + "-loader",
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return new ExtractTextPlugin({
        use: ExtractTextPlugin.loader,
        fallback: "vue-style-loader"
      });
    } else {
      return ["vue-style-loader"].concat(loader);
    }
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return {
    css: "" + generateLoaders("css") + "",
    postcss: "" + generateLoaders("postcss") + "",
    less: "" + generateLoaders("less") + "",
    sass: "" + generateLoaders("sass", { indentedSyntax: true }) + "",
    scss: "" + generateLoaders("sass") + "",
    stylus: "" + generateLoaders("stylus") + "",
    styl: "" + generateLoaders("stylus") + ""
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
  var output = [];
  var loaders = exports.cssLoaders(options);
  for (var extension in loaders) {
    var loader = loaders[extension];
    output.push({
      test: "" + new RegExp("\\." + extension + "$") + "",
      use: loader
    });
  }
  return output;
};
