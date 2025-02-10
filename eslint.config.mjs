import _import from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import { fixupPluginRules } from '@eslint/compat'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:storybook/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended'
  ),
  {
    ignores: ['dist', 'node_modules', 'src']
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      'import': fixupPluginRules(_import),
      'unused-imports': unusedImports,
      'jsx-a11y': jsxA11Y,
      react
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json'
        }
      }
    },
    rules: {
      'no-unused-expressions': 'error',
      'no-empty': [
        'error',
        {
          allowEmptyCatch: true
        }
      ],
      'no-console': 'error',
      'no-debugger': 'error',
      'no-alert': 'error',
      'prefer-const': 'error',
      'no-unused-vars': [
        'warn',
        {
          args: 'none'
        }
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1
        }
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-leaked-render': [
        'error',
        {
          validStrategies: ['ternary', 'coerce']
        }
      ],
      'jsx-a11y/no-autofocus': [
        'error',
        {
          ignoreNonDOM: true
        }
      ],
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton']
        }
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      'unused-imports/no-unused-imports': 'error',
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', ['parent', 'sibling'], 'type', 'index'],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true
          },
          'pathGroupsExcludedImportTypes': ['builtin'],
          'pathGroups': [
            {
              pattern: 'react',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '@/hooks',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@/utills',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: './*.module.scss',
              group: 'sibling',
              position: 'after'
            }
          ]
        }
      ],
      'complexity': [
        'error',
        {
          max: 8
        }
      ],
      'max-lines-per-function': [
        'error',
        {
          max: 150,
          skipBlankLines: true,
          skipComments: true
        }
      ]
    }
  }
]
