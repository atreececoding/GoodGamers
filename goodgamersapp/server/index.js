const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

// connection to database
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "goodgamers",
});

// backend connection to front end boiler plate stuff
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// make query to database
app.get("/api/get", (req, res) => {
    //const sqlSelect = "SELECT * FROM games ;"
    // I think here we can have a logic structure to make different calls depending
    // on the type of query we want to do 

var sqlSelect;
var badInput;

    if (req.query.nintendo && req.query.nineteenEighty && req.query.ten) {
            sqlSelect = "SELECT DISTINCT name, exactprice, releaseDate FROM games, dates, sales WHERE company = 'nintendo' AND releaseDecade = 1980 AND games.gameID = dates.gameID AND sales.gameID = games.gameID;"
    } else {
        sqlSelect = "SELECT * FROM games"
    }

    db.query(sqlSelect, (err, result) => {
        // this sends the result to the front end 
        if(err) throw error;
        else res.send(result);
    });

});

// make sure connection is working 
app.listen(3001, () => {
    console.log("running on port 3001");
});

