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
                            <button>SandBox</button>
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

export {Genres}