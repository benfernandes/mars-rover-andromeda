import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
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
