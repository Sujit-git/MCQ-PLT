import React from 'react'
import logo from './pasclogo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header>
                <nav id="header-nav" className="navbar navbar-default row">
                    <div className="container">
                        <div className="left-name">
                            Pulzion'20
                        </div>

                        <div className="pasclogo">
                            <p>
                                <img id="pasclogo1" src={logo} alt="pasclogo" />
                            </p>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;
