import Router from './Router/index.js';
import Home from './routes/Home.js';
import About from './routes/About.js';
import User from './routes/User.js';

const $router = document.querySelector('#router');
const $page = document.querySelector('#page');
const routes = [
  { path: '/', view: Home },
  { path: '/about', view: About },
  { path: '/user', view: User },
  { path: '/user/:id', view: User },
];

new Router({ $router, $page, routes });
