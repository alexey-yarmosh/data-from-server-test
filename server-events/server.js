const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');

const serverEvents = require('./server-events')

const app = new Koa();

app.use(serverEvents);
app.use(serve(path.resolve(__dirname)));
app.listen(3000);
