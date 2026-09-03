/**
 * ESLint Flat Configuration for Svelte 5 & TypeScript.
 * What: Multi-language linting pipeline for TypeScript, Svelte 5 components, and Prettier formatting.
 * When: Invoked during project linting (`pnpm lint`) and editor on-save diagnostics.
 * Why: Enforces strict TypeScript rules, bans `any`, validates Svelte 5 runes, and prevents formatting conflicts.
 */

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import globals from "globals";

export default tseslint.config(
  // Base JavaScript and TypeScript recommended rules
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Svelte recommended and prettier compatibility configs
  ...sveltePlugin.configs["flat/recommended"],
  ...sveltePlugin.configs["flat/prettier"],

  // Global environment declarations
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // TypeScript parser configuration for .ts, .mts, and Svelte 5 .svelte.ts module files
  {
    files: ["**/*.ts", "**/*.mts", "**/*.svelte.ts"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },

  // TypeScript parser configuration for Svelte single-file components
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".svelte"],
      },
    },
    rules: {
      "svelte/no-at-html-tags": "warn",
    },
  },

  // Custom project TypeScript invariants
  {
    files: ["**/*.ts", "**/*.mts", "**/*.svelte.ts", "**/*.svelte"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
    },
  },

  // Ignore build artifacts and caches
  {
    ignores: ["node_modules/", "dist/", "build/", "out/", ".next/", "coverage/"],
  },

  // Turn off formatting rules that conflict with Prettier
  prettierConfig,
);
