const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  distDir: '../out',
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "c[hash:base64:10]"
  },
  sassLoaderOptions: {
    includePaths: [path.resolve(__dirname, 'src/theme')]
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  }
})