const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const db_config = require('./db.config');
const mysql = require('mysql2');
const skills_controller = require('./skills');
const locations_controller = require('./locations');

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

app.get('/skills/', function (req, res) {
    skills_controller.getAllSkills(connection, res);
});

app.get('/locations/', function (req, res) {
    locations_controller.getAllLocations(connection, res);
});

app.get('/location/', function (req, res) {
    locations_controller.getFilteredLocations(connection, res, req);
});