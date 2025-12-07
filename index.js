//js
import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import passport from 'passport';
import { loginCheck } from './auth/passport.js';

const app = express();
dotenv.config();
loginCheck(passport);

// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('e don connect'))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');

//BodyParsing
app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: 'your-secret-key', // Setzen Sie hier ein sicheres Geheimnis für die Sitzung
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session())

app.use(express.static('public'));

//Routes
app.get('/', (req, res) => {
    res.redirect('/homepage');
});
app.use('/', require('./routes/login'));
const PORT = process.env.PORT || 4110;
app.listen(PORT, console.log("Server has started at port " + PORT))