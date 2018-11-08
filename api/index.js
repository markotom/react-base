const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const routers = require('./routers');

const app = new Koa();

app.use(logger());
app.use(cors());
app.use(
  bodyParser({
    strict: false,
    formLimit: '2mb',
    jsonLimit: '2mb',
  }),
);

routers(app);

module.exports = app;
