import styled, {css} from 'styled-components';
import THEME from "../../theme";

export const CommonButton = styled.button`
    min-width: 101px;
    color: ${THEME.COLOR.WHITE};
    text-align: center;
    text-transform: uppercase;
    font-size: ${THEME.FONT.SIZE.SMALL}px;
    transition: 0.3s transform;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:hover {
        transform: translateY(-5px);
        color: ${THEME.COLOR.WHITE};
    }
    &:disabled{
        filter: grayscale(0.5);
    }
    &::before {
        content: '';
        display: block;
        height: 10px;
        margin-left: 10px;
        transition: none;
    }
    &::after {
        content: '';
        display: block;
        height: 10px;
        margin-right: 10px;
        transition: none;
    }
    
`

// const longButton = styled(Button)`
//     display: block;
//     width: 170px;
//     margin: 45px auto 0 auto;
//     &::before, &::after{
//     background-color: ${THEME.COLOR.PRIMARY};
//   }
// `
const longBtn = css`
    display: block;
    width: 170px;
    margin: 45px auto 0 auto;
    &::before, &::after {
    background-color: ${THEME.COLOR.PRIMARY};
  }
`

export const MainButton = styled(CommonButton)`
  & > div {
    position: relative;
    line-height: 18px;
    padding: 0 18px;
    transition: none;
    &::before {
        border-style: solid;
        border-width: 0 0 10px 10px;
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: -10px;
        transition: none;
    }
    &::after {       
        border-style: solid;
        border-width: 0 0 10px 10px;
        content: "";
        display: block;
        position: absolute;
        right: 0;
        bottom: -10px;
        transform: rotate(180deg);
        transition: none;
        }
  }
  ${props => (props.longitude === 'long' ? longBtn : '')};
  ${props => (props.variant === 'secondary' ? secondaryVariant : mainVariant)};
`

const mainVariant = css`
 &::before, &::after {
    background-color: ${THEME.COLOR.PRIMARY};
  }
& > div {
   background-color: ${THEME.COLOR.PRIMARY};
   &::before {
        border-color: ${THEME.COLOR.PRIMARY} transparent; 
    }
    &::after {
        border-color: ${THEME.COLOR.PRIMARY} transparent;
        }
    }
`
const secondaryVariant = css`
 &::before, &::after{
    background-color: ${THEME.COLOR.THIRD};
  }
& > div {
   background-color: ${THEME.COLOR.THIRD};
        &::before {
            border-color: ${THEME.COLOR.THIRD} transparent;
            transition: none;
        }
        &::after {
            border-color: ${THEME.COLOR.THIRD} transparent;
            transition: none;
        }
   }
`

export function PrimaryButton({children, ...props}) {
    return (
        <MainButton  {...props}>
            <div variant={props.variant}>{children}</div>
        </MainButton>
    )
}