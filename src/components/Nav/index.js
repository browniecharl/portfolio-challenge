import React from "react";

function Nav(props) {
  const { currentTab, setCurrentTab } = props;
  return (
    <nav className="has-text-centered">
      <ul className="navBarTabs is-inline-flex">
        <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentTab("about")}>About Me</span>
        </li>
        <li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
        </li>
        <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentTab("contact")}>Contact</span>
        </li>
        <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentTab("resume")}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
