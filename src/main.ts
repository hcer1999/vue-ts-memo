import Vue from 'vue';
import App from './App.vue';
import store from './store/index';

import Category from './model/CateEnum';
import ItemData from './model/ItemData';
import ActionHelper from './store/ActionHelper';
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');

// let item1 = new ItemData(1, Category.Life, '你好', '哈哈哈');
// console.log(item1);

// const ah = new ActionHelper();
// // let item = new ItemData(-1, Category.Life, '你好啊', '哈哈哈哈');

// // ah.add(item);

// let item = new ItemData(2, Category.Life, '你真好啊', '哈哈哈哈~~');
// ah.edit(item);
