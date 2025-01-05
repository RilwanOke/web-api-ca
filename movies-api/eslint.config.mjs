import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 2020, // Use a modern JavaScript version
      sourceType: "module", // Use ES module syntax
    },
    rules: {
      "semi": 1,
      "no-console": "off",
    },
  },
  pluginJs.configs.recommended,
];
