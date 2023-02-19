module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    /* see https://eslint.org/docs/rules/#possible-problems */
    'array-callback-return': 'error',
    'no-await-in-loop': 'error',
    'no-duplicate-imports': 'error',
    'no-self-compare': 'error',

    /* see https://eslint.org/docs/rules/#suggestions */
    curly: 'error',
    'default-case': 'error',
    eqeqeq: 'error',
    'new-cap': 'error',
    'no-alert': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-else-return': 'error',
    'no-implicit-coercion': 'error',
    'no-nested-ternary': 'error',
    'no-shadow': 'error',
    'no-unneeded-ternary': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var-declaration-per-line': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'quote-props': ['error', 'as-needed'],

    /* see https://eslint.org/docs/rules/#layout-formatting */
    'brace-style': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    indent: ['error', 2, { SwitchCase: 1, MemberExpression: 1 }],
    'jsx-quotes': ['error', 'prefer-single'],
    'newline-per-chained-call': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    semi: 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-infix-ops': 'error',
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        /* see https://www.npmjs.com/package/@typescript-eslint/eslint-plugin */
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
};
