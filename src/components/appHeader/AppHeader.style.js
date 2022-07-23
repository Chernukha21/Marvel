import styled from 'styled-components';
import THEME from "../../theme";

export const Wrapper = styled.div`
        max-width: 1100px;
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0 10px 0 10px;
        @media (max-width: 481px) {
          .app{
            &__header {
                justify-content: center;
            }
            &__title{
                font-size: 16px;
            }
            &__menu{
                ul{
                    font-size: 16px;
                }
            }
          }
        }
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
                color: ${THEME.COLOR.PRIMARY};
            }
        }
    }         
`