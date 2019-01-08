import Vue from 'vue'
import App from './App.vue'
//引入vant、picker
import { Popup } from 'vant';
import { Picker } from 'vant';

//引入store
import store from './store/index'
//引入路由
import router from './router/index'
//挂载vant
Vue.use(Popup)
Vue.use(Picker);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
