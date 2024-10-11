const knex = require('knex');

/**
 * Simply perform unopinionated DB operations
 */

exports.getContentByAuthorId = async (authorId) => {
  return knex('content').where({ author: authorId });
}

exports.getContentByIdQuery = async (contentId) => {
  return knex('content').whereIn({ id: contentId });
}

exports.getContentPermissions = async (contentId, authorId, subId) => {
  return knex('content_permissions').where({ contentId, authorId, subId });
}
