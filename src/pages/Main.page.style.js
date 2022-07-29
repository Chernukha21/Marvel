import styled from 'styled-components';
import THEME from "../theme";

export const Wrapper = styled.div`
    margin-top: 50px;
    display: grid;
    max-width: 1100px;
    grid-template-columns: 3fr 2fr;
    column-gap: 20px;
    align-items: start;
    justify-content: center;
    @media ${THEME.MEDIA.largeTablet}{
      column-gap: 10px;
    }
    @media ${THEME.MEDIA.miniTablet}{
        grid-template-columns: 1fr 1fr;
        column-gap: 5px;
    }
    @media ${THEME.MEDIA.phone}{
        grid-template-columns: 1fr;
        grid-template-rows: 2fr;
        padding: 20px;
    }
    
`