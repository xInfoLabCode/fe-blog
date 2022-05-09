const { defineConfig } = require('@vue/cli-service')
const mdLoader = require.resolve('./loader/md-loader')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [{ loader: 'vue-loader',},{ loader: mdLoader }],
    }, );
  },
})
