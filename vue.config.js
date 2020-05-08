const path=require('path')
const resolve=dir=>path.join(__dirname,dir)


module.exports = {
    // pages: {
    //   index: {
    //     // page 的入口
    //     entry: 'src/index/main.js',
    //     // 模板来源
    //     template: 'public/index.html',
    //     // 在 dist/index.html 的输出
    //     filename: 'index.html',
    //     // 当使用 title 选项时，
    //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //     title: 'Index Page',
    //     // 在这个页面中包含的块，默认情况下会包含
    //     // 提取出来的通用 chunk 和 vendor chunk。
    //     chunks: ['chunk-vendors', 'chunk-common', 'index']
    //   },
    //   // 当使用只有入口的字符串格式时，
    //   // 模板会被推导为 `public/subpage.html`
    //   // 并且如果找不到的话，就回退到 `public/index.html`。
    //   // 输出文件名会被推导为 `subpage.html`。
    //   subpage: 'src/subpage/main.js'
    // },
    publicPath:process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    outputDir:'dist',//build后的路径
    indexPath:"index.html",//build后的静态文件名称
    assetsDir:'static',//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    chainWebpack:config=>{
      config.resolve.alias
        .set('@',resolve('src'))
        .set('_c',resolve('src/components'))
    }
    
    // devServer: {
    //   proxy: 'http://localhost:4000'
    // } //告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:4000。


    // devServer: {
    //   proxy: {
    //     '/api/xx/xxx': {
    //       target: 'http://localhost:4000',
    //       ws: true,
    //       changeOrigin: true,
    //       pathRewrite:{
    //         '^/api/xx/xxx':'/api/xx/xxx'
    //       }
    //     },
    //     '/api/yy/yyy': {
    //       target: 'http://localhost:4001',
    //       pathRewrite:{
    //         '^/api/yy/yyy':'/api/yy/yyy'
    //       }
    //     }
    //   }
    // }
  
  }