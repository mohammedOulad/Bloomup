const express = require("express");
const app = express();
const cors = require("cors");
const ejs = require('ejs');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const { Schema } = mongoose;
const CryptoJS = require('crypto-js')


// eerste moet er connectie gemaakt worden met mongoose server
mongoose.connect('mongodb://localhost:27017/exam');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.set("port", 3001);

app.listen(app.get("port"), () =>
    console.log("[server] http://localhost:" + app.get("port"))
);


// de mongoose server linken aan MongodbServer
const Users = mongoose.model('users', new Schema({
    email: String,
    password: String
}), "users");


// GET Req

// app.get("/exam/create", (req, res) => {
//     Users.find({}, (err, Users) => {
//         res.send(Users);
//     });
// });

app.get("/exam/create", (req, res) => {
    res.render("Gebruiker", {})
});
app.get("/exam/login", (req, res) => {
    res.render("Login", {})
});

app.get("/exam/delete", (req, res) => {
    res.render("Delete", {})
});
// POST Req

app.post("/exam/login", (req, res) => {

    Users.create(req.body)
    // If user is successfully created, send back json
    .then(NewUser => {
        res.json(NewUser);
    }).catch(err => {
        console.error("Failed to create NewUser", err);
        res.status(500);
        res.send("Failed to create NewUser");
    })
});

app.delete("/exam/delete", (req, res) => {

    Users.findOneAndDelete({})
    .catch(err => {
        console.error("Failed to remove loaned devices", err);
        res.status(501);
        res.send("Failed to remove loaned device");
    })
});