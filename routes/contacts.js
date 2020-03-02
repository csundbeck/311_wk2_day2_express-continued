const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contacts")

router.get("/contacts", contactsController.list);
router.get("/contacts/:id", contactsController.show);

module.exports = router;