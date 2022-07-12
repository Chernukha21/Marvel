import styled from 'styled-components';
import THEME from "../../theme";
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
    &:hover {
        transform: translateY(-5px);
        color: #fff;
    }
    &:disabled{
        filter: grayscale(0.5);
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
`

export const LongButton = styled(Button)`
    display: block;
    width: 170px;
    margin: 45px auto 0 auto;
    &::before, &::after{
    background-color: ${THEME.COLOR.PRIMARY};
  }
`
export const MainButton = styled(Button)`
  &::before, &::after{
    background-color: ${THEME.COLOR.PRIMARY};
  }
`
export const SecondaryButton = styled(Button)`
  &::before, &::after{
    background-color: ${THEME.COLOR.THIRD};
  }
`
export const InsideButton = styled.div`
    position: relative;
    background-color: ${THEME.COLOR.PRIMARY};
    line-height: 18px;
    padding: 0 18px;
    transition: none;
    &::before {
        border-color: ${THEME.COLOR.PRIMARY} transparent;
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
        border-color: ${THEME.COLOR.PRIMARY} transparent;
        border-style: solid;
        border-width: 0 0 10px 10px;
        content: "";
        display: block;
        position: absolute;
        right: 0;
        bottom: -10px;
        transform: rotate(180deg);
        transition: none;
`
export const SecondaryInsideButton = styled(InsideButton)`
    background-color: ${THEME.COLOR.THIRD};
        &::before {
            border-color: ${THEME.COLOR.THIRD} transparent;
            transition: none;
        }
        &::after {
            border-color: ${THEME.COLOR.THIRD} transparent;
            transition: none;
        }
`