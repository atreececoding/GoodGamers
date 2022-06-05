//import React, {Component} from 'react';
import logo from './logo.PNG';
import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';
import {SearchPage, array} from './SearchPage.js';

function SearchResults () {
    //const [searchResults, setSearchResults] = useState([]);
    // const [returnArray, setReturnArray] = useState([]);
    // setReturnArray(array);
    return (
      <div className="searchResults">
          Search results appearing now
          
            return <h1>ID: {array[0]}, name: {array[1]}, company: {array[2]} </h1>
          
      </div>
    );
}

export {SearchResults};