const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
// 用于将单位转化为rem
module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            browsers: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
            minPixelValue: 1
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
