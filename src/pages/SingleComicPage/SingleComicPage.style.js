import styled from "styled-components";
import THEME from '../../theme';
import {Link} from "react-router-dom";
export const Wrapper = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 293px 550px auto;
    column-gap: 50px;
    align-items: start;
    padding: 0 20px 0 20px;
`
export const Picture = styled.img`
    width: 293px;
    height: 450px;
`
export const InfoWrapper = styled.div`
    
`;
export const Title = styled.h2`
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
`
export const Description = styled.p`
     font-size: 18px;
     line-height: 24px;
     margin-top: 25px;
`
export const Price = styled.div`
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: ${THEME.COLOR.PRIMARY};
    margin-top: 25px;
`
export const StyledLink = styled(Link)`
  justify-self: end;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        border: 1px solid ${THEME.COLOR.PRIMARY};
        border-radius: 5px;
        padding: 10px;
        &:hover {
            color: ${THEME.COLOR.PRIMARY};
        }
`
