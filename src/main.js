import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'

// 注册highlight指令
import 'highlight.js/styles/googlecode.css' // todo 通过link，在index.html引入了样式了，似乎没有通过npm安装的好看，待解决，只留一个（整合一下，把link的js保存文件导入，合并下样式，现在的情况为，用link的js,npm好像不好。css要link加npm的）
// import hljs from 'highlight.js'
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
