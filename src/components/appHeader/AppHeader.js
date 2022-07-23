import {Link, NavLink} from "react-router-dom";
import {RouterLink,Nav, Title, Wrapper} from "./AppHeader.style";

const AppHeader = () => {
    return (
        <Wrapper>
            <Title>
                <Link to="/">Marvel information portal</Link>
            </Title>
            <Nav>
                <ul>
                    <li>
                        <RouterLink
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
                        </RouterLink>
                    </li>
                    /
                    <li>
                        <RouterLink
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
                        </RouterLink>
                    </li>
                </ul>
            </Nav>
        </Wrapper>
    )
}

export default AppHeader;