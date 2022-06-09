/*
*
* @authors: Andrew and Dylan
* @version: 1.0
*
*/
import logo from './logo.PNG';
import React, { useState } from "react";
import { Genres, Companies, Decades, ArtStyles, Platforms, PriceRange, getParams} from './DropDowns.js'
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/*
* The result of the data returned from the backend.
*/
var result;

/*
* The variable used to extract the data from the result.
*/
var resultValues;

/*
* An object of the parameters used in the DropDowns file.
*/
var parameters;

/*
* This function creates the search buttons 
* and connects them to the backend for database retrieval.
*/
function SearchButtons() {
  const [isLoading, setLoading] = useState(true);

  const generateQuery = () => {
    Axios.get('http://localhost:3001/api/get/?', {
      params: {
        nintendo: parameters.nintendo,
        rockstar: parameters.rockstar,
        battle: parameters.battle,
        nineteenEighty: parameters.nineteenEighty,
        ten: parameters.ten,
        action: parameters.action,
        ps3: parameters.ps3,
        ps4: parameters.ps4,
      }
    }).then((response) => {
      result = response.data[0];
      resultValues = Object.values(result)
      setLoading(false)
    })
  }

  if (isLoading) {
    return (
      <div className="App-buttons">
        <Genres /> <Companies /> <Decades /> <ArtStyles /> <Platforms /> <PriceRange />
        <body>
          <button onClick={function (e) {
            setLoading(true)
            parameters = getParams();
            generateQuery();
          }}>
            <Link to="/SearchButtons">search</Link>
          </button>
        </body>
      </div>

    );
  } else {
    return (
      <>
      <div className="App-buttons">
        <Genres /> <Companies /> <Decades /> <ArtStyles /> <Platforms /> <PriceRange />
        <body>
          <button onClick={function (e) {
            setLoading(true)
            parameters = getParams();
            generateQuery();
          }}>
            <Link to="/Searchbuttons">search</Link>
          </button>
        </body>
      </div>
      <div>{resultValues[0]}, Made by: {resultValues[1]}, Sells for: {resultValues[2]}</div>
      </>
    );
  }
}

export { SearchButtons };