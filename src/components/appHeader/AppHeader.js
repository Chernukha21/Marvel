import React from 'react';
import {Link, NavLink} from "react-router-dom";
// import './appHeader.scss';
import {Nav, Wrapper} from "./AppHeader.style";
import {Title} from './AppHeader.style';
import THEME from "../../theme";
const AppHeader = () => {
    return (
        <Wrapper>
            <Title>
                <Link to="/">
                    Marvel information portal
                </Link>
            </Title>
            <Nav>
                <ul>
                    <li>
                        <NavLink
                            exact
                            activeStyle={{
                                'color': 'red',
                                'padding': '0 5px 0 5px',
                                'display': 'block',
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
                                'color': 'red',
                                'padding': '0 5px 0 5px',
                                'display': 'block',
                                'borderRadius': '5px',
                                'border': '1px solid black'
                            }}
                            to="/comics"
                        >
                            Comics
                        </NavLink>
                    </li>
                </ul>
            </Nav>
        </Wrapper>
    )
}

export default AppHeader;