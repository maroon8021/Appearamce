import Vue from 'vue';
import Router from 'vue-router';
import AnimationView from 'views/animation/index.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/AnimationView',
      name: 'AnimationView',
      component: AnimationView,
    }
  ],
});