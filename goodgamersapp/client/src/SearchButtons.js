//import React, {Component} from 'react';
import logo from './logo.PNG';
import { Genres, Companies, Decades, ArtStyles, Platforms, PriceRange, makeQuery } from './DropDowns.js'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function SearchButtons() {
  return (
    <div className="App-buttons">
      <Genres /> <Companies /> <Decades /> <ArtStyles /> <Platforms /> <PriceRange />
      <body>
        <button onClick={function (e) {
          makeQuery();
        }}>
          <Link to="/Searchresults">search</Link>
        </button>
      </body>
    </div>

  );
}

export { SearchButtons };