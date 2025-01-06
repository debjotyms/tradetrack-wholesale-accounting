const router = require("express").Router();
const bankController = require("../controllers/bankController"); // Import the controller

router.post("/list", bankController.getBankList);
router.post("/add", bankController.addBank);
router.post("/delete", bankController.deleteBank);

router.post("/accountinfo", bankController.getBankAccountInfo);
router.post("/accountlist", bankController.getBankAccountList);

module.exports = router;
