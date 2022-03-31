/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  moduleNameMapper: {
    "\\.(css|scss|svg|jpeg)$": "identity-obj-proxy",
  },
  roots: ["<rootDir>/tests"],
};
