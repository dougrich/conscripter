const path = require('path')
const webpack = require('webpack')

const ISPRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  cssModules: true,
  assetPrefix: ISPRODUCTION ? '/conscripter/' : '',
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: 'c[hash:base64:10]'
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
      BASE_LINK: ISPRODUCTION ? '"/conscripter"' : '""'
    }))
    return config
  }
}
