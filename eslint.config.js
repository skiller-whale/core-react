import path from "node:path"
import { fileURLToPath } from "node:url"
import typescriptEslintParser from "@typescript-eslint/parser"
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import importPlugin from "eslint-plugin-import"
import { FlatCompat } from "@eslint/eslintrc"

const ENABLE_REACT_HOOKS_JS = false
const ENABLE_REACT_HOOKS_TS = false

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ...compat.extends("plugin:prettier/recommended"),
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
  },
  ...(ENABLE_REACT_HOOKS_JS
    ? [
        {
          files: ["src/custom_hooks/*.js*(x)"],
          rules: {
            // Rules used in custom_hooks exercise to highlight the improper use of hooks
            "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
            "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
          },
        },
      ]
    : []),
  ...(ENABLE_REACT_HOOKS_TS
    ? [
        {
          languageOptions: {
            parser: typescriptEslintParser,
          },
          files: ["src_tsx/custom_hooks/*.ts*(x)"],
          rules: {
            // Rules used in custom_hooks exercise to highlight the improper use of hooks
            "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
            "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
          },
        },
      ]
    : []),
  {
    languageOptions: {
      parser: typescriptEslintParser,
    },
    files: ["**/*.js*(x)", "**/*.ts*(x)", "*.json"],
    ignores: ["node_modules", "build"],
    plugins: {
      import: importPlugin,
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      "import/newline-after-import": 2,
      "import/first": 2,
      "import/order": 2,
      "@typescript-eslint/no-inferrable-types": 2,

      // Required to avoid tsc stripping unused imports that are used in solving exercises
      // Used in conjunction with tsconfig verbatimModuleSyntax rule
      "@typescript-eslint/no-import-type-side-effects": 2,
      "@typescript-eslint/consistent-type-imports": [
        2,
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true,
        },
      ],

      // Insert some lines between statements to improve readability of tsc output
      "@typescript-eslint/padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "type", next: "*" },
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: "*", next: "export" },
        { blankLine: "always", prev: "export", next: "*" },
        { blankLine: "always", prev: "multiline-const", next: "const" },
        { blankLine: "always", prev: "expression", next: "const" },
      ],
    },
  },
]
