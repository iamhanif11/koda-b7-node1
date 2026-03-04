import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  { files: ["**/*.js"], 
    languageOptions: { globals: globals.node },
    ignores: ["node_module"],

    plugins: {'@stylistic': stylistic},

    rules: {
      "prefer-const": "warn",
      eqeqeq: "error",
      "@stylistic/semi": "error",
      "@stylistic/indent": "error",
      "@stylistic/block-spacing": "error",
      "@stylistic/brace-style": "error",
      "no-return-await": "error",
      "no-self-assign": "error"
    } },
]);
