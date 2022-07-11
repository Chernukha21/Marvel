import styled from 'styled-components';
import THEME from "../../theme";
export const Wrapper = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
`
export const Title = styled.h1`
        font-weight: bold;
        font-size: 28px;
        line-height: 37px;
        span {
            color: #9F0013;
        }
`
export const Nav = styled.ul`
    ul {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        li {
            margin: 0 8px;
            a:hover {
                color: $main-color;
            }
        }
    }         
`