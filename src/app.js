const Koa = require('koa');
const mountRoutes = require('./public');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());

mountRoutes(app);

app.listen( 9098);

module.exports = app;
