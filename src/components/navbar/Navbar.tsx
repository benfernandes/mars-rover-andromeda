import { useState } from "react";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import './Navbar.scss';

interface Clickable {
    onClick: () => void
}

function Navbar() {
    const [navbarOpen, setNavBarOpen] = useState(false);

    function Links(props:Clickable) {
        return (
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
        );
    }
    
    //TODO Delete this
    function toggleNavbar() {
        console.log("toggle");
        setNavBarOpen(current => !current);
    }

    return (
        <div className="nav-and-logo-container">
            <img src="https://png.pngitem.com/pimgs/s/388-3882910_graphics-hd-png-download.png" alt="Bendromeda logo" height="64"/>
            <nav className={`mobile-navbar ${navbarOpen ? "open" : "closed"}`}>
                <button className="nav-button hamburger-button" onClick={toggleNavbar}>
                    <GoThreeBars color="white" size="22"/>
                </button>
                <Links onClick={toggleNavbar}/>
            </nav>
            <nav className="desktop-navbar">
                <Links onClick={() => {}}/>
            </nav>
        </div>
    );
}

export default Navbar;
