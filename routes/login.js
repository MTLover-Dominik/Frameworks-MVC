//js
import express from 'express';
import {homepageView} from '../controllers/homepageController.js';
import { registerView, loginView } from '../controllers/loginController.js';
import { registerUser, loginUser } from '../controllers/loginController.js';
import { dashboardView } from '../controllers/dashboardController.js';
import { protectRoute } from '../auth/protect.js';
const router = express.Router();
router.get('/homepage', homepageView);
router.get('/register', registerView);
router.get('/login', loginView);
router.get("/dashboard", protectRoute, dashboardView);
router.get("/logout", (req, res) => {
    req.logout(() => {});
    res.redirect("/login");
});
router.post('/register', registerUser);
router.post('/login', loginUser);
module.exports = router;