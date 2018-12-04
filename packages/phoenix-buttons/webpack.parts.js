const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const GitRevisionPlugin = require("git-revision-webpack-plugin")
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin")
const path = require("path")

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: "errors-only",

    host,
    port,
    open: true,

    overlay: true,

    watchOptions: {
      aggregateTimeout: 300,

      poll: 1000,
    },

    contentBase: './build',
    hot: true,
  },
})

exports.entry = () => ({
  entry: './lib/index.js',
})

exports.output = () => ({
  output: {
    libraryTarget: 'umd',
    library: 'PhoenixButtons',
    path: path.join(__dirname, './build'),
    filename: 'phoenix-buttons.js',
  },
})

exports.plugins = () => ({
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})

exports.loadJavaScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,

        use: "babel-loader",
      },
    ],
  },
})

exports.clean = pluginPath => ({
  plugins: [new CleanWebpackPlugin([pluginPath])],
})

exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
  ],
})

exports.minifyJavaScript = () => ({
  optimization: {
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true })],
  },
})
