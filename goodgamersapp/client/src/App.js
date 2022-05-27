import logo from './logo.PNG';
import './App.css';
import {Genres, Companies, Decades, ArtStyles, Platforms, PriceRange} from './DropDowns.js'
import {SearchResults} from './Searchresults.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
