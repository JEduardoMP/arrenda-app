const { default: mongoose } = require("mongoose");
const arrendaModels = require("../models/index.models");

// The variables 'user' and _id (which came from req) means the ID for user, NOT the contact

// (/contact).get
const getAllContacts = async (req, res, next) => {
  const cookie = req.headers.cookie;
  const data = cookie.split(';').find(el => el.includes('userId')).split('=')[1]
  try {
    const contacts = await arrendaModels.contact.find({ user: data });
    // console.log(contacts)
    res.status(200).json({
      status: "OK",
      contacts,
    });
  } catch (error) {
    next(error);
  }
};
// (/contact).post
const postContacts = async (req, res, next) => {
  const { firstname, lastname, phone, _id } = req.body;
  try {
    const newContact = new arrendaModels.contact({
      firstname,
      lastname,
      phone,
      user: _id,
    });
    await newContact.save();
    res.status(202).json({
      status: "OK",
      message: "User created as successfully",
    });
  } catch (e) {
    next(e);
  }
};
// (/contact/:id).get
const getContactById = async (req, res, next) => {
  const cookie = req.headers.cookie;
  const user = cookie.split(';').find(el => el.includes('userId')).split('=')[1]
  const { id } = req.params;
  try {
    const contact = await arrendaModels.contact.findById(id).findOne({user});
    res.status(200).json({
      status: "OK",
      contact
    });
  } catch (error) {
    next(error);
  }
};
// (/contact/:id).put
const updateContactById = async (req, res, next) => {
  const { firstname, lastname, phone, _id } = req.body;
  const { id } = req.params;
  try {
    const contact = await arrendaModels.contact.findById(id).findOneAndUpdate({user: _id}, {firstname, lastname, phone});
    res.status(200).json({
      status: "OK",
      contact
    });
  } catch (error) {
    next(error);
  }
};
// (/contact/:id).delete
const deleteContactById = async (req, res, next) => {
  const cookie = req.headers.cookie;
  const user = cookie.split(';').find(el => el.includes('userId')).split('=')[1]
  const { id } = req.params;
  try {
    await arrendaModels.contact.deleteOne({
      _id: mongoose.Types.ObjectId(id),
      user
    });
    res.status(204).json({ 
      status: 'Not Content',
      message: "Contact was delete",
    });
    res;
  } catch (error) {}
};

module.exports = {
  getAllContacts,
  postContacts,
  getContactById,
  deleteContactById,
  updateContactById
};
