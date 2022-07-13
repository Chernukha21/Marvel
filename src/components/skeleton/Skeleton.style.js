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

export const SkeletonWrapper = styled.div`
    margin-top: 30px;
    animation: ${pulseAnimation} 1.5s ease-in-out .5s infinite;
`
export const SelectNotice = styled.p`
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
`
export const SkeletonHeader = styled.div`
    display: grid;
    grid-template-columns: 40px auto;
    column-gap: 10px;
    align-items: center;
`
export const SkeletonCircle = styled.div`
    width: 40px;
    height: 40px;
    background-color: #C4C4C4;
    border-radius: 100%;
`
export const SkeletonMini = styled.div`
    width: 100%;
    height: 16px;
    background-color: #C4C4C4;
`
export const SkeletonBlock = styled.div`
    height: 35px;
    width: 100%;
    background-color: #C4C4C4;
    margin-top: 15px;
`