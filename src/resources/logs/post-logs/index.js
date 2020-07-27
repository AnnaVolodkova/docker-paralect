const logsService = require('../logs.service');

async function handler(ctx) {
  if(ctx.request.body.event){
    const log = ctx.request.body;
    await logsService.create(log);
    ctx.status = 200;
    ctx.body = 'Ok';
  }
  else{
    ctx.body = 'Field event not found';
  }
}


module.exports.register = (router) => {
  router.post('/logs', handler);
};
