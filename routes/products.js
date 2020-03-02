const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products")

router.get("/product", productsController.list);
router.get("/products/:id", productsController.show);

module.exports = router;