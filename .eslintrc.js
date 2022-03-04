module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["eslint-plugin-import-helpers", "react", "jsx-a11y", "prettier"],
  rules: {
    "react/function-component-definition": "off",
    "no-undef": "off",
    "import/no-unresolved": "off",
    "react/display-name": "off",
    "no-console": "off",
    "react/prop-types": "off",
    "no-unused-vars": [
      "warn",
      {
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_.*?$",
      },
    ],
  },
};
