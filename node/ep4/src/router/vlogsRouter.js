const express = require('express');
const vlogsRouter = express.Router();
const products = require("../data/products.json");

vlogsRouter.route("/").get((req,res) => {
    res.render("vlogs", {
        products,
});
});

vlogsRouter.route("/:id").get((req,res) => {
    const id = req.params.id;
    res.render("vlog",{
        product: products[id],
    })
});

module.exports = vlogsRouter;