import { useState } from "react";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import './Navbar.scss';

function Navbar() {
    const [navbarOpen, setNavBarOpen] = useState(false);

    function toggleNavbar() {
        setNavBarOpen(current => !current);
    }  

    return (
        <nav className={`navbar ${navbarOpen ? "open" : "closed"}`}>
            <button className="nav-button hamburger-button" onClick={toggleNavbar}>
                <GoThreeBars color="white" size="22"/>
            </button>
            <ul className="nav-list" >
                <li>
                    <Link className="nav-button" onClick={() => setNavBarOpen(false)} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="nav-button" onClick={() => setNavBarOpen(false)} to="/earth">
                        Earth
                        <img className="planet-icon" src="images/earth.png" alt="earth" />
                    </Link>
                </li>
                <li>
                    <Link className="nav-button" onClick={() => setNavBarOpen(false)} to="/mars">
                        Mars
                        <img className="planet-icon" src="images/mars.png" alt="mars" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
