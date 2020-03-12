const message = require('./message');

const longPolling = async (ctx, next) => {
  if (ctx.path === '/getData') {
    setInterval(() => {
      const letter = message.getLetter();
      if (letter) {
        ctx.websocket.send(letter);
      }
    }, 100);
  }
  await next();
}

module.exports = longPolling;
