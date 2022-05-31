import logo from './logo.PNG';
import './App.css';
import {SearchPage} from './SearchPage.js';
import {SearchButtons} from './SearchButtons.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Axios from 'axios';

function App() {

  // this sends the result from the backend to console. I think we can redirect it wherever
useEffect(() => {
  Axios.get('http://localhost:3001/api/get').then((response) => {
    console.log(response.data)
  })
}, [])

  const submitReview = () => {
    Axios.post('http://localhost:3000/api/insert', {
        gameID: 11, 
        gamename: 'zelda', 
        company: 'Nintendo',
    }).then(() => {
        alert("successful insert");
    });
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
        </Routes>  
      </Router>
      </div>
      </header>
    </div>
  );
}

export default App;
