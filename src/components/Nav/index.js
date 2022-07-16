import React from "react";
// import CodeIcon from '@mui/icons-material/Code';
// import GitHubIcon from '@mui/icons-material/GitHub';
import "./Nav.css";
// import Grid from '@mui/material/Grid';

function Nav() {
    return (
        <nav className="has-text-right">
            <ul className="is-inline-flex">
                <li className="mx-3">
                    <span>About</span>
                </li>
                <li className="mx-3">
                    <span>Portfolio</span>
                </li>
                <li className="mx-3">
                    <span>Resume</span>
                </li>
                <li className="mx-3 pr-5">
                    <span>Contact</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;