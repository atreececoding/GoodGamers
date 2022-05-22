import logo from './logo.PNG';
import './App.css';
import {Genres, Companies, Decades, ArtStyles, Platforms, PriceRange} from './DropDowns.js'

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Good Gamers database!
        </p>
        <p>
          Our goal is to provide you with the best selection of video titles.
          Please search for your favorite video game preferences
        </p>
        <input type="text" />
        <p>
          Additionally, you can use our drop down menus to search specific categories
        </p>
        {/* <script type="text/javascript" src="./Genres.js"></script> */}
        <Genres/>
        <Companies/>
        <Decades/>
        <ArtStyles/>
        <Platforms/>
        <PriceRange/>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
