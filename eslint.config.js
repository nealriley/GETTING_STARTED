import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  // Global ignores
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**'],
  },

  // TypeScript/JavaScript files
  {
    files: ['**/*.{js,mjs,ts}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // General rules
      'no-console': 'off', // Allow console for this educational project
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },

  // Astro files - use recommended config
  ...eslintPluginAstro.configs.recommended,

  // Additional Astro-specific overrides
  {
    files: ['**/*.astro'],
    rules: {
      // Astro-specific rules can go here
    },
  },
];
