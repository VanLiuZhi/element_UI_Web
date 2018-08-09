import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'

// 全局注册icons图标
import './icons'

// 注册highlight指令
import 'highlight.js/styles/androidstudio.css'
import './assets/js/hightlight.js'
// css 的文件有好多个，更换可以采用不同的样式

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
