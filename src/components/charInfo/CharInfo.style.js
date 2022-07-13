import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 25px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 5;
    background-color: #fff;
`
export const CharBasic = styled.div`
    display: grid;
    grid-template-columns: 150px auto;
    column-gap: 25px;
`
export const Img = styled.img`
     width: 150px;
     height: 150px;
     object-fit: contain;
`
export const BtnWrapper = styled.div`
     margin-top: 35px;
     a:nth-child(2) {
        margin-top: 10px;
     }
`
export const CharName = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    text-transform: uppercase;
`
export const CharDescription = styled.div`
    margin-top: 15px;
    font-size: 14px;
    line-height: 18px;
`
export const CharComic = styled.div`
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;
`
export const CharComicList = styled.ul`
    position: relative;
    margin-top: 10px;
`
export const CharComicListItem = styled.li`
    width: 100%;
    padding: 0 10px;
    line-height: 25px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
`