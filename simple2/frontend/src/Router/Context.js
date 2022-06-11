import { getPath, getQueryParmas, validatePaths } from '../utils/index.js';

class Context {
  constructor() {
    this.state = {};
    this.init();
  }

  init() {
    this.setState({
      path: getPath(),
      queryParams: getQueryParmas(),
      params: {},
    });
  }

  setState(state) {
    this.state = { ...this.state, ...state };
  }
}

const context = new Context();
export default context;
