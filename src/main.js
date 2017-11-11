import Vue from 'vue'
import App from './App.vue'

//Components
import landing from './components/landing.vue'

//Modules
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResouce);


Vue.http.options.credentials = true;

const router = new VueRouter({
  routes:[
    {
      name: 'Landing',
      path: '/',
      component: landing
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
