import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default {
  parser: typescriptParser,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    js.configs.recommended,
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-refresh/recommended',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['dist'],
  files: ['**/*.{ts,tsx}'],
  globals: globals.browser,
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    '@typescript-eslint': typescriptEslint,
    tailwindcss: tailwindcss,
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Other custom rules can be added here
  },
};
