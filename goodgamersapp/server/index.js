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

console.log(req.query.input)
    if(req.query.gamename != null) {
        //console.log(req.query.gamename);
        sqlSelect = "SELECT * FROM games WHERE name = '" + req.query.gamename + "';";
    } else if (req.query.nintendo == 'true' && req.query.nineteenEighty == 'true' && req.query.ten == 'true') {
        console.log(req.query.nintendo);
        sqlSelect = "SELECT DISTINCT name, exactprice, releaseDate FROM games, dates, sales WHERE company = 'nintendo' AND releaseDecade = 1980 AND games.gameID = dates.gameID AND sales.gameID = games.gameID AND pricerange = 10;"
    } else if (req.query.rockstar = 'true' && req.query.action == 'true' && req.query.ps4 == 'true') {
        sqlSelect = "SELECT name, genre, company FROM games, gamesByGenre, gamesByPlatform WHERE genre = 'action' AND company = 'Rockstar Games' AND platform = 'playstation 4' AND games.gameID = gamesByGenre.gameID AND games.gameID = gamesByPlatform.gameID;";
    } else if (req.query.battle = 'true' && req.query.ps3 == 'true' && req.query.ps4 == 'true') {
        sqlSelect = "SELECT DISTINCT name, genre FROM games, gamesByGenre, gamesByPlatform WHERE games.gameID = gamesByPlatform.gameID AND games.gameID = gamesByGenre.gameID AND genre = 'battle royale' AND platform = 'playstation 4' AND company = 'pubg'";
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

