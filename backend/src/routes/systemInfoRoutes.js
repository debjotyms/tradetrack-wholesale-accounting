const router = require("express").Router();
const systemInfoController = require("../controllers/systemInfoController"); // Import the controller


router.post("/datetime", systemInfoController.getSystemDateAndTime);


module.exports = router;
