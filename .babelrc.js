const env = require("./env-config");

module.exports = {
  presets: ["next/babel"],
  plugins: [["transform-define", env], "transform-remove-console"],
};
