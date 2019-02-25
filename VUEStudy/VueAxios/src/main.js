// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import qs from "qs"

Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/api'

// Axios.defaults.baseURL = 'https://api.example.com';
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false


// 添加一个请求拦截器
Axios.interceptors.request.use(function (config) {
  
  if(config.method == "post"){
    config.data = qs.stringify(config.data);
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
Axios.interceptors.response.use(function (response) {
  // console.log("响应" + response);
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


var mydata = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'];
var Mock = require("mockjs");
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name|1': mydata
  }]
})
// console.log(JSON.stringify(data, null, 4));

var a = JSON.stringify(data, null, 4);
console.log(a)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
