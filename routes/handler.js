const express = require("express");
const {
    registerDrug,
    registerCompany,
    checkDrugAuthenticity,
    dashboard,
    login,
    logout,
    profile
} = require("../controller/controller");

const router = express.Router();

router.route("/drug/:code").get(checkDrugAuthenticity)
router.route("/log-out").get(logout)
router.route("/register-drug").post(registerDrug);
router.route("/sign-up").post(registerCompany);
router.route("/sign-in").post(login);
router.route("/dashboard").get(dashboard)
router.route("/profile").get(profile)


module.exports = router;