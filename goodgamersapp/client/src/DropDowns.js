/*
*
* @authors: Andrew and Dylan
* @version: 1.0
*
*/
import React, { Component } from 'react';
import Axios from 'axios';

/*
* instantiates the button parameters used for the backend.
*/
var statusOfButtons = {
    nintendo: false,
    rockstar: false,
    battle: false,
    nineteenEighty: false,
    ten: false,
    action: false,
    ps3: false,
    ps4: false

}

/*
* returns the status of all the buttons for the backend.
*/
function getParams() {
    return statusOfButtons;
}

/*
* Determines the status of the buttons for the backend.
*/
statusOfButtons = {
    nintendo: false,
    rockstar: false,
    battle: false,
    nineteenEighty: false,
    ten: false,
    action: false,
    ps3: false,
    ps4: false
}

/*
* This is the genres dropdown button class.
*/
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
            this.setState({ showMenu: false })
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
                                <button>SandBox</button>
                                <button onClick={function (e) {
                                    statusOfButtons.action = !statusOfButtons.action;
                                    console.log('action', statusOfButtons.action);
                                }}>Action</button>
                                <button onClick={function (e) {
                                    statusOfButtons.battle = !statusOfButtons.battle;
                                    console.log('battle', statusOfButtons.battle);
                                }}>Battle Royale</button>
                                <button buttonid="sports">Sports</button>
                                <button buttonid="mmo">MMO</button>
                                <button>RPG</button>
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

/*
* This is the companies dropdown button class.
*/
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
            this.setState({ showMenu: false })
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
                                <button onClick={function (e) {
                                    statusOfButtons.nintendo = !statusOfButtons.nintendo;
                                    console.log('nintendo ', statusOfButtons.nintendo);

                                }}>Nintendo</button>
                                <button buttonid="bethesda">Bethesda</button>
                                <button buttonid="ubisoft">Ubisoft</button>
                                <button buttonid="microsoft">Microsoft</button>
                                <button onClick={function (e) {
                                    statusOfButtons.rockstar = !statusOfButtons.rockstar;
                                    console.log('rockstar ', statusOfButtons.rockstar);

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

/*
* This is the decades dropdown button class.
*/
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
            this.setState({ showMenu: false })
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
                                <button onClick={function (e) {
                                    statusOfButtons.nineteenEighty = !statusOfButtons.nineteenEighty;
                                    console.log('1980 ', statusOfButtons.nineteenEighty);
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

/*
* This is the artstyles dropdown button class.
*/
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
            this.setState({ showMenu: false })
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

/*
* This is the platforms dropdown button class.
*/
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
            this.setState({ showMenu: false })
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
                                <button onClick={function (e) {
                                    statusOfButtons.ps3 = !statusOfButtons.ps3;
                                    console.log('ps3 ', statusOfButtons.ps3);

                                }}>Playstation3</button>
                                <button onClick={function (e) {
                                    statusOfButtons.ps4 = !statusOfButtons.ps4;
                                    console.log('ps4 ', statusOfButtons.ps4);
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

/*
* This is the pricerange dropdown button class.
*/
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
            this.setState({ showMenu: false })
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
                                <button onClick={function (e) {
                                    statusOfButtons.ten = !statusOfButtons.ten;
                                    console.log('ten ', statusOfButtons.ten);
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


export { Genres, Companies, Decades, ArtStyles, Platforms, PriceRange, getParams }