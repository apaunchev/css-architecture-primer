const postcssPresetEnv = require("postcss-preset-env");
const postcssCustomMedia = require("postcss-custom-media");

module.exports = {
  plugins: [postcssPresetEnv, postcssCustomMedia],
};
