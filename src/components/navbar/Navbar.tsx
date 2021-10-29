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
                    <Link className="nav-button" onClick={props.onClick} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="nav-button" onClick={props.onClick} to="/earth">
                        Earth
                        <img className="planet-icon" src="images/earth.png" alt="earth" />
                    </Link>
                </li>
                <li>
                    <Link className="nav-button" onClick={props.onClick} to="/mars">
                        Mars
                        <img className="planet-icon" src="images/mars.png" alt="mars" />
                    </Link>
                </li>
            </ul>
        );
    }

    return (
        <div className="nav-and-logo-container">
            <img className="logo-img" src="images/BendromedaLogo_Trans.png" alt="Bendromeda logo"/>
            <nav className={`mobile-navbar ${navbarOpen ? "open" : "closed"}`}>
                <Links onClick={() => setNavBarOpen(false)}/>
            </nav>
            <nav className="desktop-navbar">
                <Links onClick={() => {}}/>
            </nav>
            <button className="nav-button hamburger-button" onClick={() => setNavBarOpen(!navbarOpen)}>
                <GoThreeBars color="white" size="22"/>
            </button>
        </div>
    );
}

export default Navbar;
