module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        // 接口开头通用路径
        target: 'http://ttapi.research.itcast.cn/', // 服务端地址
        changeOrigin: true, // 开启代理
        secure: false,
        pathRewrite: {
          '^/api': '' // 这里是将/api替换为空字符串“” ，也就是删除的意思
        }
      }
    }
  }
}
