// What: ESLint flat configuration for TypeScript, React/Next.js, and Prettier formatting.
// When: during project linting (`pnpm lint`) and editor on-save diagnostics.
// Why: enforces strict TypeScript rules, bans `any`, and turns off formatting conflicts.

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  // Base JavaScript and TypeScript recommended rules
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Custom project rules: warn on unused vars with underscore prefix, strictly ban any
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
    },
  },

  // Ignore build artifacts, dependency directories, and coverage reports
  {
    ignores: ["node_modules/", "dist/", "build/", "out/", ".next/", "coverage/"],
  },

  // Turn off all ESLint formatting rules that conflict with Prettier
  prettierConfig,
);
