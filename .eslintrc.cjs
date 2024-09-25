/* eslint-disable semi */
/* eslint-disable quotes */
const baseConfig = require("@tealfeed-builder/config/eslint.config.cjs");

/** @type {import('eslint').Linter.Config} */
const config = {
  ...baseConfig,
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    ...baseConfig.rules,
  },
};

module.exports = config;
