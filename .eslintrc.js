module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:prettier/recommended"],
  plugins: ["import", "react-hooks"],
  rules: {
    "import/newline-after-import": 2,
    "import/order": 2,
    // "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    // "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  },
}
