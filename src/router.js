import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home.vue';
import About from './pages/about.vue';
import navbarVue from './components/navbar.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: navbarVue,
      props: true,
      children: [
        {
          path: "",
          component: Home
        },
        {
          path: "about",
          component: About
        }
      ]
    }
  ],
  mode: "history"
});


