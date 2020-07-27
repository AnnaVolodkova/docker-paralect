const Router = require('@koa/router');


const router = new Router();

require('./get-user').register(router);


module.exports = router.routes();
