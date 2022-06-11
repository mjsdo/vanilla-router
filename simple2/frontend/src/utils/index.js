const getPath = () => window.location.pathnam;

const getQueryParmas = () => {
  const output = {};

  const { search } = window.location;
  const urlSearchParams = new URLSearchParams(search);
  urlSearchParams.forEach((value, key) => {
    output[key] = value;
  });

  return output;
};

const validatePaths = (path, routePath) => {
  const invalidOutput = { valid: false, params: {} };

  const pathArr = path.split('/');
  const routePathArr = routePath.split('/');

  if (pathArr.length !== routePathArr.length) {
    return invalidOutput;
  }

  const potentialParamsArr = routePathArr
    .map((value, index) => [value, pathArr[index]])
    .filter(([routeSubPath, subPath]) => routeSubPath !== subPath);

  const params = {};
  for (const [key, value] of potentialParamsArr) {
    if (!key.startsWith(':')) {
      return invalidOutput;
    }
    params[key.slice(1)] = value;
  }

  return { valid: true, params: params };
};

export { getPath, getQueryParmas, validatePaths };
