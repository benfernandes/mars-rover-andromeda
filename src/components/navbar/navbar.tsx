import React, { useState } from "react";
import {Link} from "react-router-dom";
import './navbar.scss';

function Navbar() {
    const [navbarOpen, setNavBarOpen] = useState(false);

    function toggleNavbar() {
        setNavBarOpen(current => !current);
    }

    return (
        <nav className={`navbar${navbarOpen ? " showMenu" : ""}`}>
            <button className={"burger-button"} onClick={toggleNavbar}>{navbarOpen ? "Close" : "Open"}</button>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/earth">Earth</Link>
                </li>
                <li>
                    <Link to="/mars">Mars</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
