// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './router'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false


const router = new VueRouter({
    routes,
    mode:'history'
})

/*router.beforeEach((to, from, next) => {
    // console.log(to);return;
    if(to.path == '/'){
        next();
    }else{
        // alert('false');
        next(false);
    }}

)*/



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
