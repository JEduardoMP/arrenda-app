const express = require("express");
const agenda_controller = require("../controllers/index.controllers");
const {
  headerValidator,
} = require("../middelwares/header-validator.middleware");

const router = express.Router();

// user
router.route("/user").post(headerValidator, agenda_controller.postUser);
// contacs
router
  .route("/contacts")
  .get(agenda_controller.getAllContacts)
  .post(agenda_controller.postContacts);
// contacs by id
router
  .route("/contacts/:id")
  .delete(agenda_controller.deleteContactById)
  .put(agenda_controller.updateContactById)

module.exports = { agendaRouter: router };
