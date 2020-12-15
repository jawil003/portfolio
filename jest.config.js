const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  setupFiles: ["dotenv/config", "<rootDir>/src/tests/config/setup.js"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/config/setupAfterEnv.js"],
  testPathIgnorePatterns: [
    "/.next/",
    "/node_modules/",
    "/tests/config/",
    "/coverage/",
  ],
};
