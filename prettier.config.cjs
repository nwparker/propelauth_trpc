/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  singleQuote: true,
  printWidth: 120,
  singleAttributePerLine: true,
};

module.exports = config;
