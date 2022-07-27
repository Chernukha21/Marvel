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
    @media ${THEME.MEDIA.phone}{
      order: 2;
    }
`
export const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 200px);
    column-gap: 25px;
    row-gap: 30px;
    @media ${THEME.MEDIA.largeTablet}{
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${THEME.MEDIA.miniTablet}{
        grid-template-columns: minmax(auto,1fr);
        column-gap: 5px;
        row-gap: 5px;
    }
    @media ${THEME.MEDIA.phone}{
        grid-template-columns: minmax(auto,1fr);
        column-gap: 5px;
        row-gap: 5px;
    }
    
`
export const Item = styled.li`
    min-width: 200px;
    height: 318px;
    background-color: ${THEME.COLOR.SECONDARY};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .25);
    padding: 15px;
    cursor: pointer;
    transition: 0.3s transform;
    @media ${THEME.MEDIA.largeTablet}{
        padding: 0;
    }
     @media ${THEME.MEDIA.miniTablet}{
        padding: 0;
    }
`
export const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    transform: translate(-15px, -15px);
    @media ${THEME.MEDIA.largeTablet}{
        transform: none;
    }
    @media ${THEME.MEDIA.miniTablet}{
        transform: none;
    }
    @media ${THEME.MEDIA.phone}{
        transform: none;
    }
    
`
export const Name = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    text-transform: uppercase;
    color: #fff;
    @media ${THEME.MEDIA.largeTablet}{
        padding: 20px 0 0 0;
    }
`

