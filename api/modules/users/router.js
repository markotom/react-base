const Router = require('koa-router');
const User = require('./model');

const router = new Router({
  prefix: '/users',
});

router.get('/', async (ctx) => {
  const { query } = ctx.request;

  const users = await User.dataTables({
    limit: query.limit || 20,
    skip: query.start,
    find: {
      deletedAt: {
        $exists: false,
      },
    },
    sort: query.sort,
    formatter: 'toPublic',
  });

  ctx.body = users;
});

module.exports = router;
