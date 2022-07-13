import styled from 'styled-components';
import THEME from "../../theme";

export const CharactersList = styled.div`
    text-align: center;
    span {
        display: block;
        font-size: 30px;
        margin-top: 20px;
        animation: flicker 2s linear infinite;
    }
`
export const CharGridWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 200px);
    column-gap: 25px;
    row-gap: 30px;
`
export const CharGridListItem = styled.li`
    width: 200px;
    height: 318px;
    background-color: ${THEME.COLOR.SECONDARY};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .25);
    padding: 15px;
    cursor: pointer;
    transition: 0.3s transform;
`
export const CharImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    transform: translate(-15px, -15px);
`
export const CharName = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    text-transform: uppercase;
    color: #fff;
`