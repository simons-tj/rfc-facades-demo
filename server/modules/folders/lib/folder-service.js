const { getFolderQuery, getFolderPermissionsQuery } = require('server/modules/folders/db/folder-queries');

exports.getFolderById = async (folderId) => {
  const folder = await getFolderQuery(folderId);
  if (!folder) throw new Error('Folder not found');
  return folder;
}

exports.getFolderPermissions = async (folderId) => {
  const folder = await getFolderPermissionsQuery(folderId);
  if (!folder) throw new Error('Folder not found');
  return folder.permissions;
}
