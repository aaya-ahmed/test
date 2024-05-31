module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    strict: ['error', 'global'],
    curly: 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-self-assign': 'off',
    'react/no-unknown-property': 'warn',
    'no-empty': 'warn',
    'react/jsx-key': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-debugger': 'warn',
    'no-extra-semi': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    'no-undef': 'off',
  },
};
