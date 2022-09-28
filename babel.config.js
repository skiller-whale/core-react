module.exports = (api) => {
  return {
    presets: api.env("test")
      ? [["@babel/preset-env", { targets: { node: "current" } }]]
      : [],
    plugins: [
      "@babel/plugin-syntax-jsx",
      ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],
    ],
  }
}
