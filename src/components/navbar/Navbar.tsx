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
                    <Link className="nav-button" onClick={toggleNavbar} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="nav-button" onClick={toggleNavbar} to="/earth">
                        Earth
                        <img className="planet-icon" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/59788/earth-planet-clipart-md.png" width="25" alt="earth" />
                    </Link>
                </li>
                <li>
                    <Link className="nav-button" onClick={toggleNavbar} to="/mars">
                        Mars
                        <img className="planet-icon" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1556252/planet-mars-clipart-xl.png" width="25" alt="mars" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
