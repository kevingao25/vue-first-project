module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-first-project/" : "/",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
  configureWebpack: {
    devtool: "source-map",
  },
};
