import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser, 
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn",
    },
  },
];