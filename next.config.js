const path = require('path')
const withSass = require('@zeit/next-sass')
const webpack = require('webpack')

module.exports = withSass({
  cssModules: true,
  assetPrefix: process.env.PRODUCTION ? '/conscripter/' : '',
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "c[hash:base64:10]"
  },
  sassLoaderOptions: {
    includePaths: [path.resolve(__dirname, 'theme')]
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    config.plugins.push(new webpack.DefinePlugin({
      BASE_LINK: process.env.PRODUCTION ? '"/conscripter"' : '""'
    }))
    return config
  }
})