import styled from 'styled-components';
import THEME from "../../theme";
export const Wrapper = styled.div`
    padding: 25px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 5;
    background-color: #fff;
    @media ${THEME.MEDIA.phone}{
      order: 1;
    }
`
export const Basic = styled.div`
    display: grid;
    grid-template-columns: 150px auto;
    column-gap: 25px;
    @media ${THEME.MEDIA.miniTablet}{
        grid-template-columns: minmax(auto,1fr);
    }
    @media ${THEME.MEDIA.phone}{
      grid-template-columns: 1fr;
    }
`
export const Img = styled.img`
     width: 150px;
     height: 150px;
     object-fit: contain;
     ${THEME.MEDIA.miniTablet}{
        min-width: 200px;
        height: 200px;
     }
`
export const BtnWrapper = styled.div`
     margin-top: 35px;
     a:nth-child(2) {
        margin-top: 10px;
     }
     @media ${THEME.MEDIA.miniTablet}{
        display: block;
     }
`
export const Name = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    text-transform: uppercase;
`
export const Description = styled.div`
    margin-top: 15px;
    font-size: 14px;
    line-height: 18px;
`
export const Comic = styled.div`
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;
`
export const ComicsList = styled.ul`
    position: relative;
    margin-top: 10px;
`
export const Item = styled.li`
    width: 100%;
    padding: 0 10px;
    line-height: 25px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
`