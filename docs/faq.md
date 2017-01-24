### vue

1. 独立构建 vs 运行时构建

* 独立构建：第一步，编译器将字符串模板（template）编译为渲染函数（render），称之为编译过程；第二步，运行时实际调用编译的渲染函数，称之为运行过程。

* 运行时构建：只有第二步。

第一步需要使用浏览器的DOM解析功能，无法使用服务端渲染。

运行时构建去除了第一步的编译器功能，所以代码包更小。

2. vue智能地计算出重新渲染组件的最小代价？

3. import的路径问题

配置webpack resolve.alias

4. bundle.js有1.4MB?

webpack --display-modules --sort-modules-by size 查看bundle中模块大小；发现
element-ui.js 589k, element-ui/~/index.css 112k, vue-router 51.6k, elment-ui/~/popper.js 49.6k 

通过script标签，link标签引入，配置webpack externals

5. element-ui太大了，嵌套太多div，受不了。uninstall了，自己写样式吧。