const path = require('path');

global.xrequire = (...module) => {
  if (module[0] && module[0].startsWith('.')) {
    return require(path.resolve(...module));
  }
  return require(module[0]);
};
global.xrequire.cache = require.cache;
global.xrequire.main = require.main;
global.xrequire.resolve = (request, options = null) => {
  if (request.startsWith('.')) {
    return require.resolve(path.resolve(request), options);
  }
  return require.resolve(request, options);
};
global.xrequire.resolve.paths = request => {
  if (request.startsWith('.')) {
    return require.resolve.paths(path.resolve(request));
  }
  return require.resolve.paths(request);
};