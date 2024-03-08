const { defineConfig } = require('@vue/cli-service')
const {ModuleFederationPlugin} = require('webpack').container

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9000,
    historyApiFallback: true,
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    optimization: {
      // 共享模块时，不能开启
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'base',
        filename: 'baseRemoteEntry.js',
        exposes: {
          './js-cloud-components': './src/js-cloud-components/index.js'
        },
        remotes: {
          'gateway': 'gateway@http://localhost:9001/gatewayRemoteEntry.js',
          'jifei': 'jifei@http://localhost:9002/jifeiRemoteEntry.js',
        }
      })
    ]
  }
})
