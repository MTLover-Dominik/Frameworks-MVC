//js
const express = require('express');
const { registerView, loginView } = require('../controllers/loginController');
const { registerUser, loginUser } = require('../controllers/loginController');
const { dashboardView } = require("../controllers/dashboardController");
const { logoutView } = require("../controllers/logoutController");
const { protectRoute } = require("../auth/protect");
const router = express.Router();
router.get('/register', registerView);
router.get('/login', loginView);
router.get("/dashboard", protectRoute, dashboardView);
router.get('/logout', logoutView);
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
});
router.post('/register', registerUser);
router.post('/login', loginUser);
module.exports = router;