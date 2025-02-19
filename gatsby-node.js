const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

exports.onCreateBabelConfig = ({ actions }, pluginOptions) => {
  actions.setBabelPlugin({
    name: require.resolve(`@vanilla-extract/babel-plugin`),
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [new VanillaExtractPlugin()],
  });
};
