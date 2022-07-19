import styled from 'styled-components';
import { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
    0% {
        opacity: 1
    }
    50% {
        opacity: .4
    }
    100% {
        opacity: 1
    }
`

export const Wrapper = styled.div`
    margin-top: 30px;
    animation: ${pulseAnimation} 1.5s ease-in-out .5s infinite;
`
export const Notice = styled.p`
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
`
export const Header = styled.div`
    display: grid;
    grid-template-columns: 40px auto;
    column-gap: 10px;
    align-items: center;
`
export const Circle = styled.div`
    width: 40px;
    height: 40px;
    background-color: #C4C4C4;
    border-radius: 100%;
`
export const Mini = styled.div`
    width: 100%;
    height: 16px;
    background-color: #C4C4C4;
`
export const Block = styled.div`
    height: 35px;
    width: 100%;
    background-color: #C4C4C4;
    margin-top: 15px;
`