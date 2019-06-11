module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'semi': [2, 'never'],
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    "consistent-return": 'off',
    'no-console': 'off',
    'func-names': 'off',
    'comma-dangle': [2, 'never'],
  }
}
