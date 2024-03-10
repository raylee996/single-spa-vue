const { name } = require('./package');
const { defineConfig } = require('@vue/cli-service')
const {ModuleFederationPlugin} = require('webpack').container

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    port: 9001,
    historyApiFallback: true,
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'gateway',
        /* filename: 'gatewayRemoteEntry.js',
        exposes: {
          './app': './src/main.js'
        }, */
        remotes: {
          base: 'base@http://localhost:9000/baseRemoteEntry.js'
        }
      })
    ],
    output: {
      library: `gateway-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_gateway`,
    },
  }
})
