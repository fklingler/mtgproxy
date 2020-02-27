const path = require("path");
const common = require("./webpack.common.config");

module.exports = {
    ...common,
    mode: "development",
    watch: true,
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        port: 8080
    },
    devtool: "source-map"
};
