var path = require("path");
var utils = require("./utils");
var config = require("../config");
var vueLoaderConfig = require("./vue-loader.conf");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: "./src/main.js",
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath:
      process.env.mode === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.common.js",
      "@": resolve("src")
    }
  },
  module: {
    rules: [
      // {
      //   test: /.(js|vue)$/,
      //   enforce: "pre",
      //   include: [resolve("src"), resolve("test")],
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "eslint-loader",
      //       options: {
      //         formatter: require("eslint-friendly-formatter")
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "vue-loader",
            options: vueLoaderConfig
          }
        ]
      },
      {
        test: /\.js$/,
        include: [resolve("src"), resolve("test")],
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          }
        ]
      },
      {
        test: "/.(png|jpe?g|gif|svg)(?.*)?$/",
        use: [
          {
            loader: "url-loader",
            query: {
              limit: 10000,
              name: utils.assetsPath("img/[name].[hash:7].[ext]")
            }
          }
        ]
      },
      {
        test: "/.(woff2?|eot|ttf|otf)(?.*)?$/",
        use: [
          {
            loader: "url-loader",
            query: {
              limit: 10000,
              name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
            }
          }
        ]
      }
    ]
  }
};
