const router = require('express').Router();
const controllers = require("../controllers/controllers");

router.get("/getAll", controllers.getAllFactories);

module.exports = router;