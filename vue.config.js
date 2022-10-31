const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false,
  publicPath:'/',  // 执行 npm run build 统一配置路径
  pluginOptions:{
    'style-resources-loader':{
        preProcessor:'scss',
        patterns:[]
    }
}


  //  // 组件是如何被渲染到页面中的？ （ast：抽象语法树；vDom：虚拟DOM）
  // // template ---> ast ---> render ---> vDom ---> 真实的Dom ---> 页面
  // // runtime-only：将template在打包的时候，就已经编译为render函数
  // // runtime-compiler：在运行的时候才去编译template
  // runtimeCompiler: false,

  // productionSourceMap: false, // 是否为生产环境构建生成 source map

  // //调整内部的 webpack 配置
  // configureWebpack: () => { },

  // chainWebpack: () => { },

  // // 配置 webpack-dev-server 行为。
  // devServer: {
  //   open: true, // 编译后默认打开浏览器
  //   host: '0.0.0.0',  // 域名
  //   port: 8080,  // 端口
  //   https: false,  // 是否https
  //   // 显示警告和错误
  //   overlay: {
  //     warnings: false,
  //     errors: true
  //   },
  // }
})
