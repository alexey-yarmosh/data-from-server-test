const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const websockify = require('koa-websocket');

const websockets = require('./websockets')

const app = websockify(new Koa());

app.ws.use(websockets);
app.use(serve(path.resolve(__dirname)));
app.listen(3000);
