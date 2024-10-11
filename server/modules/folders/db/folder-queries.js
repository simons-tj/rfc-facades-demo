const knex = require('knex');

exports.getFolderById = (folderId) => {
  return knex('folders').where({ id: folderId });
}

exports.getFoldersByParentId = (parentId) => {
  return knex('folders').where({ parent: parentId });
}


exports.getFolderPermissionsQuery = (folderId) => {
  return knex('folder_permissions').where({ id: folderId });
}
