const products = require("../data/products");

const list = (req, res) => {
    res.json(products);
}

const show = (req, res) => {
    const id = req.params.id;
    const foundProduct = products.find(product => product._id === Number(id));
    res.json(foundProduct);
}

module.exports = {
    list,
    show
}