module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:prettier/recommended"],
  plugins: ["import"],
  rules: {
    "import/newline-after-import": 2,
    "import/order": 2,
  },
}
