import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`;
export const Wrapper = styled.div`
    padding: 50px 0 50px 0;
    position: relative;
    margin: 0 auto;
    max-width: 1100px;
`
export const MainTag = styled.main`
    margin: 50px auto 0 auto;
    position: relative;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
`
export const VisionImage = styled.img`
    position: absolute;
    right: 176px;
    bottom: -70px;
    z-index: -1;
`