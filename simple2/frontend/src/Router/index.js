import { getPath, getQueryParmas, validatePaths } from '../utils/index.js';
import context from './Context.js';
import defaultNotFound from './defaultNotFound.js';

class Router {
  constructor({ $router, $page, routes, notFound = defaultNotFound }) {
    if (!$router || !$page) {
      throw Error('Arguments $router and $page cannot be null');
    }

    this.$router = $router;
    this.$page = $page;
    this.routes = routes;
    this.notFound = notFound;
    this.context = context;
    this.addEvents();
  }

  addEvents() {
    this.addPageLoad();
    this.addClickLink();
    this.addPopState();
  }

  addPageLoad() {
    document.addEventListener('DOMContentLoaded', () => {});
  }

  addClickLink() {
    this.$router.addEventListener('click', () => {});
  }

  addPopState() {
    window.addEventListener('popstate', () => {});
  }

  route() {
    this.context.setState({ path: getPath(), queryParams: getQueryParmas() });
    const { path: currentPath } = this.context.state;

    for (const { path: routePath, view } of this.routes) {
      const { valid, params } = validatePaths(currentPath, routePath);
      if (!valid) {
        continue;
      }

      this.context.setState({ params });
      this.$page.innerHTML = view();
      return;
    }

    this.$page.innerHTML = this.notFound.view();
  }
}
