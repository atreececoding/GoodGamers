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
                            <button>Action</button>
                            <button>Sports</button>
                            <button>MMO</button>
                            <button>RPG</button>
                            <button>Fantasy</button>
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
                            <button>Blizzard</button>
                            <button>Nintendo</button>
                            <button>Bethesda</button>
                            <button>Ubisoft</button>
                            <button>Microsoft</button>
                            <button>Rockstar Games</button>
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
                            <button>1960</button>
                            <button>1970</button>
                            <button>1980</button>
                            <button>1990</button>
                            <button>2000</button>
                            <button>2010</button>
                            <button>2020</button>
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
                            <button>Pixel</button>
                            <button>Abstract</button>
                            <button>Boxed</button>
                            <button>Undefined</button>
                            <button>3D</button>
                            <button>Cartoon</button>
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
                            <button>Xbox</button>
                            <button>Xbox360</button>
                            <button>Xbox1</button>
                            <button>Xbox SeriesX</button>
                            {/* <button>Playstation</button> */}
                            <button>Playstation3</button>
                            <button>Playstation4</button>
                            
                            <button>Nintendo WII</button>
                            <button>Nintendo Switch</button>
                            
                            <button>Gameboy</button>
                            <button>Gameboy Advance</button>
                            <button>Gameboy Color</button>
                           
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
                            <button>0-10</button>
                            <button>10-20</button>
                            <button>20-30</button>
                            <button>30-40</button>
                            <button>40-50</button>
                            <button>50-60</button>
                            <button>60-70</button>
                            <button>Unreasonable</button>
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