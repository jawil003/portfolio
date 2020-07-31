const withCss = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const {
  TsConfigPathsPlugin,
} = require("awesome-typescript-loader");
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/de": { page: "/de" },
      "/de/sources": { page: "/de/sources" },
      "/sources": { page: "/sources" },
    };
  },
  webpack: (config) => {
    config.output = config.output || {};
    if (debug) config.devtool = "eval-source-map";
    config.output.devtoolModuleFilenameTemplate = function (
      info
    ) {
      return (
        "file:///" +
        encodeURI(info.absoluteResourcePath)
      );
    };
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }
    config.resolve.plugins.push(
      new TsConfigPathsPlugin()
    );

    return config;
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
  },
  env: {
    // Will be available on both server and client
    API_URL: process.env.REACT_APP_SERVICE_URL,
  },
};
console.info(
  `Build App in ${
    process.env.NODE_ENV
  } mode, with Config ${JSON.stringify(
    Object.assign(nextConfig, {
      isProduction: !debug,
    })
  )}`
);
// next.config.js
module.exports = withPlugins([withCss], nextConfig);
