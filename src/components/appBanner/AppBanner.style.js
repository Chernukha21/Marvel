import styled from 'styled-components';
import THEME from "../../theme";

export const Banner = styled.div`
    width: 100%;
    background-color: ${THEME.COLOR.SECONDARY};
    height: 100px;
    padding: 0 25px 0 45px;
    display: flex;
    justify-content: space-between;
    @media ${THEME.MEDIA.miniTablet}{
      padding: 15px;
    }
    @media ${THEME.MEDIA.phone}{
      grid-template-columns: repeat(3,1fr);
      padding: 0 15px 0 15px;
    }
`
export const TextContent = styled.div`
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    padding-top: 18px;
    @media ${THEME.MEDIA.miniTablet}{
        font-size: 18px;
        line-height: 20px;
    }
    @media ${THEME.MEDIA.phone}{
        font-size: 14px;
        line-height: 14px;
        display: none;
    }
`
export const Img = styled.img``;