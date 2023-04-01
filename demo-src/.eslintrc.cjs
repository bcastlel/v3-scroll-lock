module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '../.eslintrc.cjs',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    /* see https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability */
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': ['error', {
      singleline: 2,
      multiline: 1,
    }],

    /* see https://eslint.vuejs.org/rules/#uncategorized */
    'vue/require-name-property': 'error',

    /* see https://eslint.vuejs.org/rules/#extension-rules */
    'vue/eqeqeq': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.vue'],
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
