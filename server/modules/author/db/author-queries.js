const knex = require('knex');

/**
 * Simply perform unopinionated DB operations
 */
exports.fetchAuthorById = async (authorId) => {
  return knex('authors').where({ id: authorId });
}
