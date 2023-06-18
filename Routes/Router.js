const express = require('express')

const DataController = require("../Controllers/HomeData")

const home = express.Router()

// router.get("./Home", DataController.HomeDataFind)
home.route("/home").get(DataController.apicontroller);
// router.post("./Home", DataController.HomeDataInsert)

module.exports = home