import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  { languageOptions: { globals: { ...globals.nodeBuiltin, ...globals.jest } } },
  pluginJs.configs.recommended,
];
