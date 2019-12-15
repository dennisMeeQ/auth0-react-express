module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "prettier"],
  extends: ["airbnb", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "no-console": "off",
    "no-use-before-define": "off",
    "no-plusplus": "off",
    "react/jsx-filename-extension": 0,
    "react/jsx-boolean-value": "off",
    "react/prop-types": [0],
    "react/no-danger": "error"
  },
  overrides: [
    {
      files: ["*.test.js", "*.spec.js"],
      rules: {
        "import/named": "off",
        "import/no-unresolved": "off"
      }
    }
  ]
};
