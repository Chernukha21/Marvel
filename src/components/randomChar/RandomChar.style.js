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
    @media ${THEME.MEDIA.miniTablet}{
        display: inline-grid;
        grid-template-columns:100%;
        grid-template-rows: repeat(2,1fr);
    }
    @media ${THEME.MEDIA.phone}{
        display: grid;
        grid-template-columns:100%;
        grid-template-rows: minmax(300px,auto) minmax(1fr);
        padding: 0;
    }
`
export const BlockPart = styled.div`
    padding: 40px 35px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 30px;
    @media ${THEME.MEDIA.miniTablet}{
      padding: 10px 15px 10px 10px;
      grid-template-columns: 1fr 2fr;
    }
    @media ${THEME.MEDIA.phone}{
      padding: 5px 5px 15px 5px;
      grid-template-columns: minmax(1fr,auto) minmax(1fr);
      column-gap: 10px;
    }
`
export const StaticPart = styled.div`
    padding: 40px 35px;
    background-color: ${THEME.COLOR.SECONDARY};
    position: relative;
    display: flex;    // this style for two empty div blocks here
    justify-content: space-between; // it is divides content in this container 
    height: 100%;
    button {
      margin-top: 13px;
    }
    @media ${THEME.MEDIA.miniTablet}{
      padding: 10px 15px 10px 10px;
    }
    @media ${THEME.MEDIA.phone}{
      padding: 10px 15px 10px 10px;
    }
`
export const TextContent = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
`
export const Title = styled.p`
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.045em;
    color: ${THEME.COLOR.WHITE};
    &:nth-child(2) {
      margin-top: 33px;
    }
    @media ${THEME.MEDIA.miniTablet}{
      font-size: 18px;
      line-height: 24px;
    }
`
export const GraphicContent = styled.div`
    @media ${THEME.MEDIA.phone}{
        position: relative;
    & > img {
        position: absolute;
        width: 150px;
        height: 150px;
        right: -34px;
        top: 38px;
      }
    }
    
`
export const Img = styled.img`
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: block;
    @media ${THEME.MEDIA.phone}{
      width: 180px;
      height: 180px;
    }
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
    display: flex;
    a:nth-child(1) {
      margin-right: 30px;
    }
    @media (max-width: 1024px){
      a:nth-child(1) {
          margin-right: 10px;
      }
    }
    @media ${THEME.MEDIA.miniTablet}{
       justify-self: center; 
    }
    @media ${THEME.MEDIA.phone}{
      display: inline-flex;
      flex-wrap: wrap;
      a:nth-child(1) {
          margin-bottom: 10px;
      }
    }
`
