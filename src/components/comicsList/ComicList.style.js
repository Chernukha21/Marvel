
import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 45px;
`

export const GridWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 225px);
    justify-content: space-between;
    row-gap: 55px;
`
export const GridItem = styled.li`
    transition: 0.3s transform;
    &:hover {
        transform: translateY(-5px);
    }
`
export const Image = styled.img`
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    width: 225px;
    height: 345px;
`
export const Name = styled.div`
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
`
export const Price = styled.div`
    margin-top: 5px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
`