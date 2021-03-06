const plugins = [
  "@emotion/babel-plugin",
  "babel-plugin-dynamic-import-node",
];

if (
  process.env.NODE_ENV !== "production"
) {
  plugins.push(
    "babel-plugin-typescript-to-proptypes",
  );
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
