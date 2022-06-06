import './App.css';
//import {app} from "./App.js";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Axios from 'axios';


var result;
var resultValues;

function SearchPage() {
  const [isLoading, setLoading] = useState(true);
  const [gamename, setgame] = useState("");
  const handleChange = e => {
    setgame(e.target.value);
  };

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