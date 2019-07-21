import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);//饿了么组件库
import router from './router.js'

let vm = new Vue({
    el:"#app",
    data:{
        msg:'嘻嘻嘻'
    },
    render:c=>c(App),
    router
})
