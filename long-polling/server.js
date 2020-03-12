const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');

const longPolling = require('./long-polling')

const app = new Koa();

app.use(longPolling);
app.use(serve(path.resolve(__dirname)));
app.listen(3000);
