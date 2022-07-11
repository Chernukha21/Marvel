import styled,{ThemeProvider} from 'styled-components';
import THEME from "../theme";
export const Button = styled.button`
    min-width: 101px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    transition: 0.3s transform;
    border: none;
    background-color: transparent;
    cursor: pointer;
    .inner {
        position: relative;
        background-color: #9F0013;
        line-height: 18px;
        padding: 0 18px;
        transition: none;
        &::before {
            border-color: #9F0013 transparent;
            border-style: solid;
            border-width: 0 0 10px 10px;
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: -10px;
            transition: none;
        }
        &::after {
            border-color: #9F0013 transparent;
            border-style: solid;
            border-width: 0 0 10px 10px;
            content: "";
            display: block;
            position: absolute;
            right: 0;
            bottom: -10px;
            transform: rotate(180deg);
            transition: none;
        }
        &__main, &__secondary {
        &:hover {
            color: #fff;
        }
    }
    &__secondary {
        .inner {
            background-color: #5C5C5C;
            &::before {
                border-color: #5C5C5C transparent;
                transition: none;
            }
            &::after {
                border-color: #5C5C5C transparent; 
                transition: none;
            }
        }
    }
    &::before {
        content: '';
        display: block;
        height: 10px;
        margin-left: 10px;
        transition: none;

    }
    &::after {
        content: '';
        display: block;
        height: 10px;
        margin-right: 10px;
        transition: none;

    }
    &.button__main::before, &.button__main::after {
        background-color: #9F0013;
    }
    &.button__secondary::before, &.button__secondary::after {
        background-color: #5C5C5C;
    }
    &:hover {
        transform: translateY(-5px);
    }
    &:disabled{
        filter: grayscale(0.5);
    }
`;

export const LongButton = styled(Button)`
    display: block;
    width: 170px;
    margin: 45px auto 0 auto;
`
