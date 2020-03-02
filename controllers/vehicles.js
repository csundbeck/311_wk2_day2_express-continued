const vehicles = require("../data/vehicles");

const list = (req, res) => {
    res.json(vehicles);
}

const show = (req, res) => {
    const id = req.params.id;
    const foundVehicle = vehicles.find(vehicle => vehicle._id === Number(id));
    res.json(foundVehicle);
}

module.exports = {
    list,
    show
}