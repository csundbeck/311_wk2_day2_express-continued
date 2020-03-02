const express = require("express");
const bodyParser = require("body-parser");
const contacts = require('./data/contacts');
const comments = require('./data/comments');
const vehicles = require('./data/vehicles');
const products = require('./data/products');
const contactsRoutes = require('./routes/contacts');
const commentsRoutes = require('./routes/comments');
const productsRoutes = require('./routes/products');
const vehiclesRoutes = require('./routes/vehicles');

const app = express();
let commentCounter = comments.length;
let contactCounter = contacts.length;
let productCounter = products.length;
let vehicleCounter = vehicles.length;


const port = process.env.PORT || 4001;

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(contactsRoutes);
app.use(commentsRoutes);
app.use(productsRoutes);
app.use(vehiclesRoutes);

app.get("/contacts", (req, res) => {
    res.json(contacts);
})
app.get("/comments", (req, res) => {
    res.json(comments);
})
app.get("/products", (req, res) => {
    res.json(products);
})
app.get("/vehicles", (req, res) => {
    res.json(vehicles);
})

app.get("/contacts/:id", (req, res) => {
    const id = req.params.id;

    const foundContact = contacts.find(contact => contact._id === Number(id));
    res.json(foundContact)
})

app.get("/comments/:id", (req, res) => {
    const id = req.params.id;

    const foundComment = comments.find(comment => comment._id === Number(id));
    res.json(foundComment)
})

app.get("/vehicles/:id", (req, res) => {
    const id = req.params.id;

    const foundVehicle = vehicles.find(vehicle => vehicle._id === Number(id));
    res.json(foundVehicle)
})

app.get("/products/:id", (req, res) => {
    const id = req.params.id;

    const foundProduct = products.find(product => product._id === Number(id));
    res.json(foundProduct)
})

app.post('/comments', (req, res) => {
    let newComment = {
        _id: commentCounter + 1,
        body: req.body.body,
        postId: 1
    }
    //console.log(req.body);
    comments.push(newComment)
})

app.post('/contacts', (req, res) => {
    let newContact = {
        _id: contactCounter + 1,
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar,
        postId: 1
    }
    //console.log(req.body);
    contacts.push(newContact)
})

app.post('/products', (req, res) => {
    let newProduct = {
        _id: productCounter + 1,
        name: req.body.name,
        desription: req.body.descrption,
        postId: 1
    }
    // console.log(req.body)
    products.push(newProduct)
})

app.post('/vehicles', (req, res) => {
    let newVehicle = {
        _id: vehicleCounter + 1,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        postId: 1
    }
    console.log(req.body)
    vehicles.push(newVehicle)
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
