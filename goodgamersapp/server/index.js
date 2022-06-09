/**
 * @authors Andrew & Dylan
 * @version 6/8/2022
 */

const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

/**
 * Creates a pool of database connections that are used for 
 * connecting the Node.js database to the React.js components
 */
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

/**
 * Called by other functions in the front end. app.get(...) can call different urls to produce 
 * different sql queries or interactions with the database. This specific URL call uses the data
 * passed in the parameters object to specific queries to the database. 
 */
app.get("/api/get", (req, res) => {
    
var sqlSelect;

    if(req.query.gamename != null) {
        db.escape(req.query.gamename);
        sqlSelect = 
        "SELECT name, company, exactPrice FROM games, sales WHERE games.gameID = sales.gameID AND games.name = '" + req.query.gamename + "';";

    } else if (req.query.nintendo == 'true' && req.query.nineteenEighty == 'true' && req.query.ten == 'true') {
        sqlSelect = "SELECT DISTINCT name, company, exactprice FROM games, dates, sales WHERE company = 'nintendo' AND releaseDecade = 1980 AND games.gameID = dates.gameID AND sales.gameID = games.gameID AND pricerange = 10;"
    } else if (req.query.rockstar = 'true' && req.query.action == 'true' && req.query.ps4 == 'true') {
        sqlSelect = "SELECT name, company, exactprice FROM games, gamesByGenre, gamesByPlatform, sales WHERE games.gameID = sales.gameID AND genre = 'action' AND company = 'Rockstar Games' AND platform = 'playstation 4' AND games.gameID = gamesByGenre.gameID AND games.gameID = gamesByPlatform.gameID;";
    } else if (req.query.battle = 'true' && req.query.ps3 == 'true' && req.query.ps4 == 'true') {
        sqlSelect = "SELECT DISTINCT name, company, exactprice FROM games, gamesByGenre, gamesByPlatform, sales WHERE games.gameID = sales.gameID AND games.gameID = gamesByPlatform.gameID AND games.gameID = gamesByGenre.gameID AND genre = 'battle royale' AND platform = 'playstation 4' AND company = 'pubg'";
    }

    db.query(sqlSelect, (err, result) => {
        // this sends the result to the front end 
        if(err) throw error;
        else res.send(result);
    });

});

// This is printed to the backend console for reassurance that the database
// connection is operational. 
app.listen(3001, () => {
    console.log("running on port 3001");
});

