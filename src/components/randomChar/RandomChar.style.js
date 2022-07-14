import styled from 'styled-components';
import THEME from "../../theme";
export const Wrapper = styled.div`
    display: grid;
    width: 100%;
    margin: 0 auto;
    grid-template-columns: repeat(2, 50%);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
    align-items: center;
    justify-content: center;
`
export const BlockPart = styled.div`
    padding: 40px 35px;
    display: grid;
    grid-template-columns: 180px auto;
    column-gap: 30px;
`
export const StaticPart = styled.div`
    padding: 40px 35px;
    background-color: ${THEME.COLOR.SECONDARY};
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100%;
    button {
      margin-top: 13px;
    }
`
export const Title = styled.p`
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.045em;
    color: #FFFFFF;
    &:nth-child(2) {
      margin-top: 33px;
    }
`
export const Img = styled.img`
    width: 180px;
    height: 180px;
    object-fit: contain;
    display: block;
`
export const InfoWrapper = styled.div`
    display: grid;
    grid-template-rows: minmax(29px, auto) 125px 38px;
    row-gap: 10px;
    padding-top: 3px;
`
export const Name = styled.p`
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    text-transform: uppercase;
`
export const Description = styled.p`
    font-size: 14px;
    line-height: 18px;
`
export const ButtonsWrapper = styled.div`
    a:nth-child(1) {
      margin-right: 30px;
    }
`