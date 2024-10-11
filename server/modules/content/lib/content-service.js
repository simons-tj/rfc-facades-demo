const { getContentByIdQuery } = require('server/modules/content/db/content-queries');

exports.getContent = async (ids) => {
  const content = await getContentByIdQuery(ids);
  if (!content?.length) throw new Error('Content not found');

  return content
}
