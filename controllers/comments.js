const comments = require("../data/comments");

const list = (req, res) => {
    res.json(comments);
}

const show = (req, res) => {
    const id = req.params.id;
    const foundComment = comments.find(comment => comment._id === Number(id));
    res.json(foundComment);
}

module.exports = {
    list,
    show
}