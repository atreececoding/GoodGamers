import logo from './logo.PNG';
import './App.css';
import {Genres, Companies, Decades, ArtStyles, Platforms, PriceRange} from './DropDowns.js'
import {SearchResults} from './Searchresults.js';
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
        {/* <script type="text/javascript" src="./Genres.js"></script> */}
        
        
      </header>

      <body className="App-body">
      Please search for your favorite video game title
      </body>
      <body className="App-search">
      <input type="text" />
      <Router>
        <button>
          <Link to="/Searchresults">search</Link>
        </button> 
        <Routes>
          <Route exact path = "/Searchresults" element = {<SearchResults/>}> </Route>
        </Routes>  
      </Router>
      
      {/* /* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */ }
      
      </body>

      <body className="App-buttons">
        <p>
          Additionally, you can use our drop down menus to search specific categories
        </p>
      <Genres/> <Companies/> <Decades/> <ArtStyles/> <Platforms/><PriceRange/>
      </body>
    </div>
  );
}

export default App;
