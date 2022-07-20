import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, setCurrentTab } = props;
  return (
    <header className="headerText">
      <div>
        <h1 className=" is-size-1 pl-5 has-text-centered has-text-weight-bold has-text-white">
          Robert Velez Portfolio
        </h1>
      </div>
      <div>
        <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
      </div>
    </header>
  );
}

export default Header;
