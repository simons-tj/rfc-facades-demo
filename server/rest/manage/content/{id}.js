const { getAuthorAndCourses } = require('server/facades/authorCourse')

/**
 * Handle getting data from the request in order to pass it on to facades/libs
 * Validate request parameters
 * Handle authorization per domain
 * Respond with data/error
 */
module.exports = async ctx => {
  const id = ctx.query.id
  if (!id) {
    ctx.status = 400
    ctx.body = { error: new HTTPError('Who even are you?') }
  }

  await verifyCan()

  const courses = await getAuthorAndCourses(id)

  ctx.status = 200
  ctx.body = { courses }
}
