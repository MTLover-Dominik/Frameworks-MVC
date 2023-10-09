//js
const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
//For Register Page
const registerView = (req, res) => {
    res.render("register", { currentPage: '/register'});
};
//Post Request for Register
const registerUser = (req, res) => {
    const { name, email, location, password, confirm } = req.body;
    if (!name || !email || !password || !confirm) {
        console.log("Fill empty fields");
    }
    //Confirm Passwords
    if (password !== confirm) {
        console.log("Password must match");
    } else {
        //Validation
        User.findOne({ email: email }).then((user) => {
            if (user) {
                console.log("email exists");
                res.render("register", {
                    name,
                    email,
                    password,
                    confirm,
                });
            } else {
                //Validation
                const newUser = new User({
                    name,
                    email,
                    location,
                    password,
                });
                //Password Hashing
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(res.redirect("/login"))
                            .catch((err) => console.log(err));
                    })
                );
            }
        });
    }
};
// For View
const loginView = (req, res) => {
    res.render("login", { currentPage: '/login'});
};
//Logging in Function
const loginUser = (req, res) => {
    const { email, password } = req.body;
    let success = false;
    //Required
    if (!email || !password) {
        console.log("Please fill in all the fields");
        res.render("login", {
            email,
            password,
        });
    } else {
        passport.authenticate("local", (err, user) => {
            if (err) {
                console.log("An error occurred during login.");
                res.redirect("/login");
            } else if (!user) {
                console.log("Login failed. Invalid credentials.");
                res.redirect("/login");
            } else {
                // Login erfolgreich
                success = true;
                // Setze den Erfolg-Status im localStorage
                localStorage.setItem("loginSuccess", success);
                res.redirect("/dashboard");
            }
        })(req, res);
    }
};
module.exports = {
    registerView,
    loginView,
    registerUser,
    loginUser,
};