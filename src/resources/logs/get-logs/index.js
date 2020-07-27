const logsService = require('../logs.service');

async function handler(ctx) {
  const logs = await logsService.find();
  ctx.body = logs;
}


module.exports.register = (router) => {
  router.get('/logs', handler);
};
