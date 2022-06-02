import logo from './logo.PNG';
import './App.css';
import {SearchPage} from './SearchPage.js';
import {SearchButtons} from './SearchButtons.js';
import { SearchResults } from './Searchresults.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Axios from 'axios';

function App() {

  // this sends the result from the backend to console. I think we can redirect it wherever
// useEffect(() => {
//   Axios.get('http://localhost:3001/api/get').then((response) => {
//     console.log(response.data)
//   })
// }, [])


  
function makeQuery() {
  Axios.get('http://localhost:3001/api/get/?', {
    params: {
      rockstar: true,
      nintendo: false
    }
  }).then((response) => {
    console.log(response.data)
  })
}

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
      <button onClick={makeQuery}>
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
