const express = require("express");
const {
    registerDrug,
    registerCompany,
    checkDrugAuthenticity,
    dashboard,
    login,
    logout,
    profile,
    regDrugs
} = require("../controller/controller");
const { isLoggin } = require("../middlewares/auth");

const router = express.Router();

router.route("/drug/:code").get(checkDrugAuthenticity)
router.route("/drugs").get([isLoggin],regDrugs)
router.route("/log-out").get(logout)
router.route("/register-drug").post([isLoggin], registerDrug);
router.route("/sign-up").post(registerCompany);
router.route("/sign-in").post(login);
router.route("/dashboard").get([isLoggin], dashboard)
router.route("/profile").get([isLoggin],profile)


module.exports = router;