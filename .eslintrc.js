module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
    commonjs: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'class-methods-use-this': 0,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'src/generated/**/*.ts',
    '__tests__/**/*.ts',
  ],
};
