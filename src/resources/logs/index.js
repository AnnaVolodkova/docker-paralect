const Router = require('@koa/router');


const router = new Router();

require('./post-logs').register(router);
require('./get-logs').register(router);


module.exports = router.routes();
