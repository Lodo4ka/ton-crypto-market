import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import parserTypeScript from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules/', 'build/', 'dist/', '**/.*'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: parserTypeScript,
    },
    plugins: {
      react: eslintPluginReact,
      '@typescript-eslint': eslintPluginTypeScript,
      prettier: eslintPluginPrettier,
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
