const router = require("express").Router();

const AuthController = require("../controllers/AuthController");

router.post("/login", AuthController.postLogin);

router.post("/signup", AuthController.postSignup);

module.exports = router;
