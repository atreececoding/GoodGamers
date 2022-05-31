import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function SearchPage () {
    return (
        <div className="App-search">
        
        {/* <body className="searchBar"> */}
        <input type="text" />
        <button>
          <Link to="/Searchresults">search</Link>
        </button> 
        {/* </body> */}
        </div>
    );
}

export {SearchPage};