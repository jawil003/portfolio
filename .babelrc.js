const env = require("./env-config");

module.exports = {
  presets: ["next/babel"],
  plugins:
    process.env.NODE_ENV === "production"
      ? [["transform-define", env], "transform-remove-console"]
      : [["transform-define", env]],
};
