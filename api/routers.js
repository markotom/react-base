const requireIndex = require('es6-requireindex');
const path = require('path');
const { forEach } = require('lodash');
const Router = require('koa-router');

const rootRouter = new Router();

rootRouter.get(['/', '/_health'], (ctx) => {
  ctx.body = { success: true };
});

const modules = requireIndex(path.join(__dirname, 'modules'), {
  recursive: true,
});

module.exports = (app) => {
  app.use(rootRouter.routes());

  forEach(modules, ({ router }) => {
    app.use(router.routes());
  });
};
