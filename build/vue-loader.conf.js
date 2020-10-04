var utils = require("./utils");
var config = require("../config");
var isProduction = process.env.mode === "production";

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require("autoprefixer")({
      overrideBrowserslist: ["last 2 versions"]
    })
  ]
};
