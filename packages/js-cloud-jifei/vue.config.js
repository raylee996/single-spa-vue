const { defineConfig } = require('@vue/cli-service')
const {ModuleFederationPlugin} = require('webpack').container

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9002,
    historyApiFallback: true,
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'jifei',
        filename: 'jifeiRemoteEntry.js',
        exposes: {
          './app': './src/main.js'
        },
        remotes: {
          base: 'base@http://localhost:9000/baseRemoteEntry.js'
        }
      })
    ]
  }
})
