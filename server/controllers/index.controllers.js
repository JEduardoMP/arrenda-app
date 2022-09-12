const { getAllContacts, postContacts, getContactById, deleteContactById, updateContactById } = require("./agenda.controllers");
const { postUser } = require("./user.controllers");

module.exports = {
  getAllContacts,
  postUser,
  postContacts,
  getContactById,
  deleteContactById,
  updateContactById
}