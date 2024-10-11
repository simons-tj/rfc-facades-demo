const courseService = require('server/modules/content/lib/content-service');
const { parseActionFromCtx } = require('server/ducks/util/parse-action-from-ctx');

module.exports = async (ctx) => {
  const { payload } = parseActionFromCtx(ctx)

  await verifyCan({
    author: ctx.state.author,
    action: 'create',
  })

  courseService.createCourse({
    authorId: ctx.state.author.id,
    title: payload.title
  })
} 
