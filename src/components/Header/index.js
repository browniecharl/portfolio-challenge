import React from "react";
import Nav from '../Nav';


function Header (props) {
    const { currentTab, setCurrentTab } = props;
    return (
        <header>
            <div>
                <h1 className="is-size-1 has-text-black pl-5 mt-5">Robert Velez Portfolio</h1>
            </div>
            <div>
                <Nav
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}></Nav>
            </div>
        </header>
    );
}

export default Header;