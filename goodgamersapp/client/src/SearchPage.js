import './App.css';
//import {app} from "./App.js";
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Axios from 'axios';


function SearchPage () {
    const [gamename, setgame] = useState("");
    const handleChange = e => {
      setgame(e.target.value);
    };

    const generateQuery = () => {
      Axios.get('http://localhost:3001/api/get/?', {
          params: {
            gamename: gamename
         //   input
          }
        }).then((response) => {
           response = "got the name";
           console.log(response.data);
        })
    }

    return (
        <div className="App-search">
        
        {/* <body className="searchBar"> */}
        <input type="text" value = {gamename} onChange = {handleChange}/>
        <button onClick={function(e) {
          generateQuery();
          }}>
          <Link to="/Searchresults">search</Link>
        </button> 
        {/* </body> */}
        </div>
    );
}

export {SearchPage};