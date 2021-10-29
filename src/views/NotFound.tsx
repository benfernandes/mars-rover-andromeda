import { Link } from "react-router-dom";
import './NotFound.scss';

function NotFound() {
    return (
        <div className="not-found-div">
            <h1>Error 404 - Page not found</h1>
            <Link to="./">Go home</Link>
        </div>
    )
}

export default NotFound;
