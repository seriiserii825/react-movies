import React from "react";

const Header = () => {
    return (
        <nav id="navbar-example2" className="navbar bs-green">
            <a className="navbar-brand pink" href="/">Movies</a>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" href="some">@fat</a>
                </li>
            </ul>
        </nav>
    )
}

export {Header};