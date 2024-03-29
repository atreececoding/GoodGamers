/*
*
* @authors: Andrew and Dylan
* @version: 1.0
*
*/
import logo from './logo.PNG';
import './App.css';
import {SearchPage} from './SearchPage.js';
import {SearchButtons} from './SearchButtons.js';
import { SearchResults } from './Searchresults.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

/*
*
* This function houses the main application including the routes to new pages,
* logo, and home screen information.
* 
*/
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Good Gamers database!
        </p>
        <p>
          Our goal is to provide you with the best selection of video titles!
        </p>
        <p>
        Please search for your favorite video game title
        </p>
        <div className="App-body">
        <Router>
      <button>
          <Link to="/SearchPage">Basic search</Link>
        </button> 
        {' '}
        <button>
          <Link to="/SearchButtons">Advanced Search</Link>
        </button> 
        <Routes>
          <Route exact path = "/SearchPage" element = {<SearchPage/>}> </Route>
          <Route exact path = "/SearchButtons" element = {<SearchButtons/>}> </Route>
          <Route exact path = "/Searchresults" element = {<SearchResults/>}> </Route>
        </Routes>  
      </Router>
      </div>
      </header>
    </div>
  );
}

export default App;
