/**
 * @authors Andrew & Dylan
 * @version 6/8/2022
 */

import './App.css';
//import {app} from "./App.js";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Axios from 'axios';

/**
 * stores the result object returned from the query to the database. 
 */
var result;

/**
 * stores the result object returned from the query to the database, but split into a more managable array. 
 */
var resultValues;

/**
 * Generates the component that is used as the /searchpage URL for the front end of the web app. 
 * @returns an HTML div containing search results. 
 */
function SearchPage() {
  const [isLoading, setLoading] = useState(true);
  const [gamename, setgame] = useState("");
  const handleChange = e => {
    setgame(e.target.value);
  };

  /**
   * Calls the backend at the API URL /api/get, then stores the results returned from the
   * query that is generated on the backend in the result and resultValues variables. 
   */
  const generateQuery = () => {
    Axios.get('http://localhost:3001/api/get/?', {
      params: {
        gamename: gamename
      }
    }).then((response) => {
      result = response.data[0];
      resultValues = Object.values(result)
      console.log(resultValues[0])
      setLoading(false)

    })
  }

  if (isLoading) {
    return (
      <div className="App-search">

        {/* <body className="searchBar"> */}
        <input type="text" value={gamename} onChange={handleChange} />
        <button value="search" onClick={function (e) {
          setLoading(true);
          generateQuery();
        }}>
          <Link to="/SearchPage">search</Link>
        </button>
        {/* </body> */}
      </div>
    );
  } else {
    return (
      <>
        <div className="App-search">

          {/* <body className="searchBar"> */}
          <input type="text" value={gamename} onChange={handleChange} />
          <button value="search" onClick={function (e) {
            setLoading(true);
            generateQuery();
          }}>
            <Link to="/SearchPage">search</Link>
          </button>
          {/* </body> */}

        </div>
        <div>
          {resultValues[0]}, Made by: {resultValues[1]}, Sells for: {resultValues[2]}
        </div>
      </>
    );
  }
}

export { SearchPage, result };