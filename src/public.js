const mount = require('koa-mount');

const userResource = require('./resources/user/');
const logsResource = require('./resources/logs/')

module.exports = (app) => {
  app.use(mount('/user', userResource));
  app.use(mount('/logs', logsResource));
};
