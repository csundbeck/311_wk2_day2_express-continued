const contacts = require("../data/contacts");

const list = (req, res) => {
    res.json(contacts);
}

const show = (req, res) => {
    const id = req.params.id;
    const foundContact = contacts.find(contact => contact._id === Number(id));
    res.json(foundContact);
}

module.exports = {
    list,
    show
}