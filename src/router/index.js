import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../components/Main.vue';
import Portfolio from '../components/Portfolio.vue';
import Contact from '../components/contact.vue';
import Blog from '../components/Blog.vue';
import Login from '../components/login.vue';
import NavBar from '../components/navbar.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: NavBar,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
