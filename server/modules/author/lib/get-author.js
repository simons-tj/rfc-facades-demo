const { fetchUserById } = require('server/modules/db/authorQueries');

/**
 * Run the db query and handle business logic like what happens when the 
 * record isn't found
 */
exports.getAuthor = async (authorId) => {
  const author = await fetchAuthorById(authorId);
  if (!author) throw new Error('User not found');
  return author;
}
