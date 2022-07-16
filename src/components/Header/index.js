import React from "react";
import Nav from '../Nav';
import "./Header.css";


function Header () {
    return (
        <header>
            <div>
                <h1 className="is-size-1 has-text-black pl-5 mt-5">Robert Velez Portfolio</h1>
            </div>
            <div>
                <Nav></Nav>
            </div>
        </header>
    );
}

export default Header;