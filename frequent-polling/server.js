const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');

const dataSource = require('./dataSource');

const app = new Koa();

app.use(dataSource);
app.use(serve(path.resolve(__dirname)));
app.listen(3000);
