// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant,{Lazyload} from 'vant';
// import './assets/styles/icon/iconfont.css';
import 'styles/reset.css'
import 'styles/icon/iconfont.css'
import 'amfe-flexible'
import axios from 'axios'
Vue.use(Lazyload, {
  lazyComponent: true
});
import 'vant/lib/index.css'

// import './style.scss'
Vue.prototype.$axios = axios
Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
