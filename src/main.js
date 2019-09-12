import Vue from 'vue'
import { Button, Layout, Menu, Icon } from 'ant-design-vue';
import App from './App.vue'

Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
