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
                            activeClassName="active"
                            to="/"
                        >
                            Characters
                        </RouterLink>
                    </li>
                    /
                    <li>
                        <RouterLink
                            activeClassName="active"
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