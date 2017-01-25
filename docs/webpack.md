## webpack

读了两天webpack文档，谈谈自己的感受。

最开始接触的时候，使用基本配置，觉得很厉害，自动管理依赖，一个entry，一个output，加不同的loader，搞定。

然后想做懒加载以及一系列的优化，毕竟看到最后的bundle.js 1.5M时着实吓了一跳。然后懵了，不知道怎么改配置。看了网上一些入门介绍，并没有什么卵用。跟着vue-router介绍的懒加载以及webpack的code splitting介绍，虽然最后貌似能用了，但心里一点都不踏实。只想吐槽这都什么玩意啊。

无奈只能去读文档，开始看[这个1.X](https://webpack.github.io/docs/)，痛苦。然后看[这个2.2](https://webpack.js.org/)，感觉好多了。终于明白了loader和plugin是做什么的。似乎利用loader和plugin可以做很多事，gulp中做的校验、压缩、混淆webpack理论上都可以做。但是看了一下plugin的api，又涉及到webpack的compiler机制，貌似自己写loader和plugin又要搞好多事。


### 好用的

[Caching](https://webpack.js.org/guides/caching/)提供了在文件名中加入hash做长缓存的方案。

需要利用插件（推荐了[webpack-manifest-plugin](https://www.npmjs.com/package/webpack-manifest-plugin)和[assets-webpack-plugin](https://www.npmjs.com/package/assets-webpack-plugin)）获取文件的映射关系，类似
`
{
  "main.js": "main.155567618f4367cd1cb8.js",
  "vendor.js": "vendor.c2330c22cd2decb5da5a.js"
}
`
然后再据此处理html中的url。


[code splitting + lazyload](https://webpack.js.org/guides/code-splitting-require/)，利用require.ensure，简单到可怕，黑魔法用起来真的心慌。还有两个问题待确定，一是lazyload的模块中依赖的第三方模块怎么单独加载，二是lazyload的模块中的公用模块会怎么打包（会不会重复打包进每个模块）。


[code-splitting-libraries](https://webpack.js.org/guides/code-splitting-libraries/)将第三方资源文件与应用文件分开打包。可以作为一种拆分大文件的方案。用到webpack.optimize.CommonsChunkPlugin插件。

另一种不打包第三方资源文件的方法是使用[Externals配置](https://webpack.js.org/configuration/externals/)


[code-splitting-css](https://webpack.js.org/guides/code-splitting-css/)，将模块中的css抽离出来打包成.css文件，使用link标签加载，便于利用浏览器的并行下载机制从而更快的渲染页面。需要extract-text-webpack-plugin。


[resolve.alias](https://webpack.js.org/configuration/resolve/)可以统一公用模块的引用路径，从../../的相对路径中解脱。


### 小结

总的来说，前端期望的功能--模块化开发，文件打包，按需加载，hash长缓存，livereload、source-map--做得不错，通过loader、plugin理论上可以做到合并、压缩、混淆、雪碧图等优化工作。但是需要找到合适的plugin和loader，自己开发的话要更深入理解webpack。再就是一些黑魔法使起来心里不是很踏实。看到很多人吐槽构建时间，目前开发时使用--watch还能接受。