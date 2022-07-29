import styled from "styled-components";
import THEME from "../../theme";


export const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    padding: 0 10px;
    width: 250px;
    height: 38px;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 14px;
  }
`
export const StyledForm = styled.div`
  padding: 25px;
  margin-top: 30px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 5;
  background-color: #fff;
`
export const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #000;
`
export const Success = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: ${THEME.COLOR.SUCCESS};
`
export const SearchError = styled.div`
  margin-top: 25px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: ${THEME.COLOR.PRIMARY};
`
export const CriticalError = styled.div`
  margin-top: 25px;
`
