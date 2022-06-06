//import React, {Component} from 'react';
import logo from './logo.PNG';
import React, { useState } from "react";
import { Genres, Companies, Decades, ArtStyles, Platforms, PriceRange, getParams} from './DropDowns.js'
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

var result;
var resultValues;
var parameters;




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
// {resultValues[0]}, Made by: {resultValues[1]}, Sells for: {resultValues[2]}
export { SearchButtons };