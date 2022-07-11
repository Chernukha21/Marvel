import styled from 'styled-components';

export const Button = styled.button`
    min-width: 101px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    transition: 0.3s transform;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const LongButton = styled(Button)`
    display: block;
    width: 170px;
    margin: 45px auto 0 auto;
`
