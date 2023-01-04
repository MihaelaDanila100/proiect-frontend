const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const db_config = require('./db.config');
const mysql = require('mysql2');
const skills_controller = require('./skills');
const locations_controller = require('./locations');
const jobs_controller = require('./jobs');
const auth = require('./auth');

var app = express();

app.use(cors());
app.use(bodyparser.json());

const connection = mysql.createConnection(db_config);
connection.connect(function(error){
    if(error) {
        console.log("An error occured", error);
    } else {
        console.log("Connected to database...");
        app.listen(8083, () => {
            console.log("backend running...");
        });
    }
});

app.post('/auth/login/', function(req, res) {
    auth.logIn(connection, res, req.body);
});

app.post('/auth/signup/', function(req, res) {
    auth.signUp(connection, res, req.body);
});

app.get('/jobs/', function (req, res) {
    jobs_controller.getAllJobs(connection, res);
});

app.get('/jobs/filtered/', function (req, res) {
    jobs_controller.getFilteredJobs(connection, res, req);
});

app.get('/skills/', function (req, res) {
    skills_controller.getAllSkills(connection, res);
});

app.get('/locations/', function (req, res) {
    locations_controller.getAllLocations(connection, res);
});

app.get('/location/', function (req, res) {
    locations_controller.getFilteredLocations(connection, res, req);
});