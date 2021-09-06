import Vue from 'vue';
import VueRouter from 'vue-router';
import { Trans } from '@/plugins/Translation';
Vue.use(VueRouter);

function load(component) {
  return () => import(`@/views/${component}.vue`);
}

const routes = [
  {
    path: '/:locale',
    component: {
      template: '<router-view></router-view>',
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '/',
        name: 'Home',
        component: load('Home'),
      },
      {
        path: '*',
        redirect() {
          return Trans.defaultLocale;
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
