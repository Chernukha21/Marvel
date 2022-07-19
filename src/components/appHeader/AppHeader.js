import {Link, NavLink} from "react-router-dom";
import {Nav,Title, Wrapper} from "./AppHeader.style";

const AppHeader = () => {
    return (
        <Wrapper>
            <Title>
                <Link to="/">Marvel information portal</Link>
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