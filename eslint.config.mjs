import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    ...pluginJs.configs.recommended,
    rules: {
      "semi": "warn",
      "quotes": "warn",
      "no-const-assign": "warn",
      "no-func-assign": "warn",
      "no-unused-vars": "warn",
      "arrow-body-style": "warn",
      "camelcase": "warn",
      "capitalized-comments": ["warn", "always"],
      "new-cap": "warn",
      "no-lone-blocks": "warn",
      "no-redeclare": "warn",
      "no-var": "warn",
    },
  },
];
