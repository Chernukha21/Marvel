import React from 'react';
import {Link,NavLink} from "react-router-dom";
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li>
                        <NavLink
                        exact
                        activeStyle={{
                            'color':'red',
                            'padding': '0 5px 0 5px',
                            'display':'block',
                            'borderRadius': '5px',
                            'border': '1px solid black'
                        }}
                        to="/"
                        >
                        Characters
                    </NavLink>
                    </li>
                    /
                    <li>
                        <NavLink
                            activeStyle={{
                                'color':'red',
                                'padding': '0 5px 0 5px',
                                'display':'block',
                                'borderRadius': '5px',
                                'border': '1px solid black'
                            }}
                            to="/comics"
                        >
                            Comics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;