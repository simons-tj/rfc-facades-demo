const { getAuthorProfile } = require('server/modules/author/lib/author-service');
const { getCourses } = require('server/modules/content/lib/content-service');
const { getFolder, getFolderPermissions } = require('server/modules/folders/lib/folder-service');
const { getSubscriptionForAuthor } = require('server/modules/subscription/lib/subscription-service');
const { getContentPermissions } = require('../modules/content/db/content-queries');

/**
 * Coordinate functionality from multiple libs
 */
exports.getAuthorAndCourses = async (authorId) => {
  const author = await getAuthor(authorId);
  const courses = await getCourses(authorId);
  return { author, courses };
}

exports.getCoursesForAuthorInFolder = async (authorId, folderId) => {
  const sub = await getSubscriptionForAuthor(authorId)
  const folder = await getFolder(folderId)
  const author = await getAuthorProfile(authorId)

  // this isn't how it works, but you get the idea
  const contentPermissions = await getContentPermissions(folder.id, sub.id, author.id)

  const courses = await getCourses(contentPermissions.map(record => record.courseId))

  return {
    author,
    folder,
    courses
  }
}
