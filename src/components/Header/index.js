import React from "react";
import Nav from '../Nav';


function Header (props) {
    const { currentTab, setCurrentTab } = props;
    return (
        <header>
            <div>
<<<<<<< HEAD
                <h1 className="is-size-1 has-text-black pl-5 mt-5">Robert Valez Portfolio</h1>
=======
                <h1 className="headerText is-size-1 pl-5 has-text-centered has-text-weight-bold">Robert Velez Portfolio</h1>
>>>>>>> develop
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