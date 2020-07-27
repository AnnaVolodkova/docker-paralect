const writerService = require('../user.service');

async function handler(ctx) {
  const me = await writerService.findOne();
  ctx.body = me;
}


module.exports.register = (router) => {
  router.get('/me', handler);
};
