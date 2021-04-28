const path = require("path");
const fs = require("fs");
const {
  merge,
} = require("webpack-merge");

function resolveTsconfigPathsToAlias({
  tsconfigPath = "./tsconfig.json",
  webpackConfigBasePath = __dirname,
} = {}) {
  const {
    paths,
  } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace("/*", "");
    const value = path.resolve(
      webpackConfigBasePath,
      paths[item][0]
        .replace("/*", "")
        .replace("*", ""),
    );

    aliases[key] = value;
  });

  return aliases;
}
function getPackageDir(filepath) {
  let currDir = path.dirname(
    require.resolve(filepath),
  );
  while (true) {
    if (
      fs.existsSync(
        path.join(
          currDir,
          "package.json",
        ),
      )
    ) {
      return currDir;
    }
    const { dir, root } = path.parse(
      currDir,
    );
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      );
    }
    currDir = dir;
  }
}

module.exports = {
  stories: [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    return merge(config, {
      resolve: {
        modules: [
          path.resolve(
            __dirname,
            "../.",
          ),
          "node_modules",
        ],
        alias: {
          "@emotion/core": getPackageDir(
            "@emotion/react",
          ),
          "@emotion/styled": getPackageDir(
            "@emotion/styled",
          ),
          "emotion-theming": getPackageDir(
            "@emotion/react",
          ),
        },
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: require.resolve(
                  "babel-loader",
                ),
                options: {
                  rootMode: "upward",
                },
              },
              require.resolve(
                "react-docgen-typescript-loader",
              ),
            ],
            include: path.resolve(
              __dirname,
              "../",
            ),
          },
        ],
      },
    });
  },
};
