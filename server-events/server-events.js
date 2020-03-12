const { PassThrough } = require('stream');
const message = require('./message');

const sse = (event, data) => `event:${ event }\ndata: ${ data }\n\n`

async function serverEvents(ctx, next) {
  if (ctx.path === '/getData') {
    const stream = new PassThrough();
    setInterval(() => {
      const letter = message.getLetter();
      if (letter) {
        stream.write(sse('message', letter));
      }
    }, 100);
    ctx.type = 'text/event-stream';
    ctx.body = stream
  }
  await next();
}

module.exports = serverEvents;
