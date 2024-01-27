// Use the express.Router class to create modular, mountable route handler.
// A Router instance is a complete middleware and routing system; for this 
// reason, it is often reffered to as a  "mini-app". 

const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

// I prefer this because after .get finishes you can write .post,.delete,etc from just at whish it finishes
router.route("/").get(authcontrollers.home);
router
   .route("/register")
   .post(validate(signupSchema),authcontrollers.register);

router.route("/login").post(validate(loginSchema),authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;