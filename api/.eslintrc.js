module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      rules: {
        'import/named': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
};
