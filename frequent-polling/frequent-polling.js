const message = require('./message')

async function dataSource (ctx, next) {
  if (ctx.path === '/getData') {
    ctx.body = message.getLetter();
  }
  await next();
}

module.exports = dataSource;
