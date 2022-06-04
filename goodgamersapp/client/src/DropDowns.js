import React, { Component } from 'react';
import Axios from 'axios';

// make a query to the DB. Response.data is an array containing the query results
function makeQuery() {
    Axios.get('http://localhost:3001/api/get/?', {
      params: {
        nintendo,
        rockstar,
        battle,
        nineteenEighty,
        ten,
        rpg,
        ps3,
        ps4
      }
    }).then((response) => {
      console.log(response.data)
    })
  }

  var nintendo = false;
  var rockstar = false
  var battle = false;
  var nineteenEighty = false;
  var ten = false;
  var rpg = false;
  var ps3 = false;
  var ps4 = false;

class Genres extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        if (this.state.showMenu === false) {
            this.setState({ showMenu: true })
        } else {
            this.setState({showMenu : false})
        }
    }


    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    Genres
                </button>
                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button onClick="" buttonid="sandbox">SandBox</button>
                                <button buttonid="action">Action</button>
                                <button onClick={function(e) {
                                    battle = !battle;
                                    console.log(battle);          
                                    }}>Battle Royale</button>
                                <button buttonid="sports">Sports</button>
                                <button buttonid="mmo">MMO</button>
                                <button onClick={function(e) {
                                    rpg = !rpg;
                                    console.log('rpg ', rpg);          
                                    }}>RPG</button>
                                <button buttonid="fantasy"> Fantasy</button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

class Companies extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        if (this.state.showMenu === false) {
            this.setState({ showMenu: true })
        } else {
            this.setState({showMenu : false})
        }
    }


    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    Companies
                </button>
                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button buttonid="blizzard">Blizzard</button>
                                <button onClick={function(e) {
                                    nintendo = !nintendo;
                                    console.log('nintendo ', nintendo);          
         
                                    }}>Nintendo</button>
                                <button buttonid="bethesda">Bethesda</button>
                                <button buttonid="ubisoft">Ubisoft</button>
                                <button buttonid="microsoft">Microsoft</button>
                                <button onClick={function(e) {
                                    rockstar = !rockstar;
                                    console.log('rockstar ', rockstar);          
         
                                    }} >Rockstar Games</button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

class Decades extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        if (this.state.showMenu === false) {
            this.setState({ showMenu: true })
        } else {
            this.setState({showMenu : false})
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    Decades
                </button>
                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button buttonid="1960">1960</button>
                                <button buttonid="1970">1970</button>
                                <button onClick={function(e) {
                                    nineteenEighty = !nineteenEighty;
                                    console.log('1980 ', nineteenEighty);          
                                    }}>1980</button>
                                <button buttonid="1990">1990</button>
                                <button buttonid="2000">2000</button>
                                <button buttonid="2010">2010</button>
                                <button buttonid="2020">2020</button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

class ArtStyles extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        if (this.state.showMenu === false) {
            this.setState({ showMenu: true })
        } else {
            this.setState({showMenu : false})
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    ArtStyles
                </button>
                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button buttonid="pixel">Pixel</button>
                                <button buttonid="abstract">Abstract</button>
                                <button buttonid="boxed">Boxed</button>
                                <button buttonid="undefined">Undefined</button>
                                <button buttonid="3d">3D</button>
                                <button buttonid="cartoon">Cartoon</button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

class Platforms extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        if (this.state.showMenu === false) {
            this.setState({ showMenu: true })
        } else {
            this.setState({showMenu : false})
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    Platforms
                </button>
                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button buttonid="xbox">Xbox</button>
                                <button buttonid="xbox 360">Xbox360</button>
                                <button buttonid="xbox1">Xbox1</button>
                                <button buttonid="xbox seriesx">Xbox SeriesX</button>
                                <button onClick={function(e) {
                                    ps3 = !ps3;
                                    console.log('ps3 ', ps3);          
          
                                    }}>Playstation3</button>
                                <button onClick={function(e) {
                                    ps4 = !ps4;
                                    console.log('ps4 ', ps4);          
                                    }}>Playstation4</button>

                                <button buttonid="nintendo wii">Nintendo WII</button>
                                <button buttonid="nintendo switch">Nintendo Switch</button>

                                <button buttonid="gameboy">Gameboy</button>
                                <button buttonid="gameboy advance">Gameboy Advance</button>
                                <button buttonid="gameboy color">Gameboy Color</button>

                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

class PriceRange extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        if (this.state.showMenu === false) {
            this.setState({ showMenu: true })
        } else {
            this.setState({showMenu : false})
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    Price Range
                </button>
                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button >0-10</button>
                                <button onClick={function(e) {
                                    ten = !ten;
                                    console.log('ten ', ten);          
                                    }}>10-20</button>
                                <button buttonid="20-30">20-30</button>
                                <button buttonid="30-40">30-40</button>
                                <button buttonid="40-50">40-50</button>
                                <button buttonid="50-60">50-60</button>
                                <button buttonid="60-70">60-70</button>
                                <button buttonid="unreasonable">Unreasonable</button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}


export { Genres, Companies, Decades, ArtStyles, Platforms, PriceRange, makeQuery }