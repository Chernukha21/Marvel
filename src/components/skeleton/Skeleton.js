import React from 'react';
import {
    Wrapper,Notice,
    Header,
    Circle,
    Mini,
    Block
} from './Skeleton.style';

const Skeleton = () => {
    return (
        <>
            <Notice>Please select a character to see information</Notice>
            <Wrapper>
                <Header>
                    <Circle></Circle>
                    <Mini></Mini>
                </Header>
                <Block></Block>
                <Block></Block>
                <Block></Block>
            </Wrapper>
        </>
    )
}

export default Skeleton;