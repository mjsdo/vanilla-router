import Home from './routes/Home.js';
import About from './routes/About.js';
import NotFound from './routes/NotFound.js';

const router = async () => {
  const routes = [
    { path: '/', view: Home },
    { path: '/about', view: About },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: { path: null, view: NotFound },
    };
  }

  const $root = document.querySelector('#root');
  $root.innerHTML = match.route.view();
};

const navigate = (url) => {
  history.pushState({}, null, url);
  router();
};

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.route')) {
    e.preventDefault();
    navigate(e.target.href);
  }
});

window.addEventListener('popstate', () => {
  router();
});

window.addEventListener('DOMContentLoaded', () => {
  router();
});
