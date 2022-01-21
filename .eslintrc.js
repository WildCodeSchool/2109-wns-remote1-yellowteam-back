module.exports = {
  env: {
    browser: false,
    node: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'src/generated/**/*.ts',
    '__tests__/**/*.ts',
  ],
};
