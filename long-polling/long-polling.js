
const message = require('./message')

const getLetterPromise = () => new Promise(resolve => {
  const interval = setInterval(() => {
    const letter = message.getLetter();
    if (letter) {
      resolve(letter);
      clearTimeout(interval);
    }
  }, 100);
});

const longPolling = async (ctx, next) => {
  if (ctx.path === '/getData') {
    const letter = await getLetterPromise();
    ctx.body = letter;
  }
  await next();
}

module.exports = longPolling;
