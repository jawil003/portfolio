const plugins = [
  "@emotion/babel-plugin",
  "babel-plugin-dynamic-import-node",
];

if (
  process.env.NODE_ENV !== "production"
) {
  plugins.concat([
    "babel-plugin-typescript-to-proptypes",
    "transform-remove-console",
  ]);
}

module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource:
            "@emotion/react",
        },
      },
    ],
  ],
  plugins,
};
