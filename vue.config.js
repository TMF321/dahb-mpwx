// 项目的配置文件

module.exports = {
  devServer: {
    proxy: {
      // key: value
      //      key - 前缀
      //      value - 是跟 http-proxy-middleware 相同的一个配置对象
      '/mop': {
        target: 'http://mwx.mop.com',
        changeOrigin: true,
        pathRewrite: {
          '^/mop': ''
        }
      },
      '/api': {
        target: 'http://novelapi.mop.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
