import React, {Component} from 'react';

class Genres extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.showMenu);
        });
    }

    closeMenu(event) {
        if(!this.dropdownMenu.contains(event.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        return(
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
                            <button buttonId="sandbox">SandBox</button>
                            <button buttonId="action">Action</button>
                            <button buttonId="sports">Sports</button>
                            <button buttonId="mmo">MMO</button>
                            <button buttonId="rpg">RPG</button>
                            <button buttonId="fantasy"> Fantasy</button>
                        </div>
                    )
                    :(
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
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.showMenu);
        });
    }

    closeMenu(event) {
        if(!this.dropdownMenu.contains(event.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        return(
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
                            <button buttonId="blizzard">Blizzard</button>
                            <button buttonId="nintendo">Nintendo</button>
                            <button buttonId="bethesda">Bethesda</button>
                            <button buttonId="ubisoft">Ubisoft</button>
                            <button buttonId="microsoft">Microsoft</button>
                            <button buttonId="rockstar games">Rockstar Games</button>
                        </div>
                    )
                    :(
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
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.showMenu);
        });
    }

    closeMenu(event) {
        if(!this.dropdownMenu.contains(event.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        return(
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
                            <button buttonId="1960">1960</button>
                            <button buttonId="1970">1970</button>
                            <button buttonId="1980">1980</button>
                            <button buttonId="1990">1990</button>
                            <button buttonId="2000">2000</button>
                            <button buttonId="2010">2010</button>
                            <button buttonId="2020">2020</button>
                        </div>
                    )
                    :(
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
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.showMenu);
        });
    }

    closeMenu(event) {
        if(!this.dropdownMenu.contains(event.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        return(
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
                            <button buttonId="pixel">Pixel</button>
                            <button buttonId="abstract">Abstract</button>
                            <button buttonId="boxed">Boxed</button>
                            <button buttonId="undefined">Undefined</button>
                            <button buttonId="3d">3D</button>
                            <button buttonId="cartoon">Cartoon</button>
                        </div>
                    )
                    :(
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
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.showMenu);
        });
    }

    closeMenu(event) {
        if(!this.dropdownMenu.contains(event.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        return(
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
                            <button buttonId="xbox">Xbox</button>
                            <button buttonId="xbox 360">Xbox360</button>
                            <button buttonId="xbox1">Xbox1</button>
                            <button buttonId="xbox seriesx">Xbox SeriesX</button>
                            {/* <button>Playstation</button> */}
                            <button buttonId="playstation3">Playstation3</button>
                            <button buttonId="playstation4">Playstation4</button>
                            
                            <button buttonId="nintendo wii">Nintendo WII</button>
                            <button buttonId="nintendo switch">Nintendo Switch</button>
                            
                            <button buttonId="gameboy">Gameboy</button>
                            <button buttonId="gameboy advance">Gameboy Advance</button>
                            <button buttonId="gameboy color">Gameboy Color</button>
                           
                        </div>
                    )
                    :(
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
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.showMenu);
        });
    }

    closeMenu(event) {
        if(!this.dropdownMenu.contains(event.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        return(
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
                            <button buttonId="10-20">0-10</button>
                            <button buttonId="10-20">10-20</button>
                            <button buttonId="20-30">20-30</button>
                            <button buttonId="30-40">30-40</button>
                            <button buttonId="40-50">40-50</button>
                            <button buttonId="50-60">50-60</button>
                            <button buttonId="60-70">60-70</button>
                            <button buttonId="unreasonable">Unreasonable</button>
                        </div>
                    )
                    :(
                        null
                    )
                }
            </div>
        );
    }
}


export {Genres, Companies, Decades, ArtStyles, Platforms, PriceRange}