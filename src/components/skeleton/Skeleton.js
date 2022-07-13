import React from 'react';
import {
    SkeletonWrapper,
    SelectNotice,
    SkeletonHeader,
    SkeletonCircle,
    SkeletonMini,
    SkeletonBlock
} from './Skeleton.style';

const Skeleton = () => {
    return (
        <>
            <SelectNotice>Please select a character to see information</SelectNotice>
            <SkeletonWrapper>
                <SkeletonHeader>
                    <SkeletonCircle></SkeletonCircle>
                    <SkeletonMini></SkeletonMini>
                </SkeletonHeader>
                <SkeletonBlock></SkeletonBlock>
                <SkeletonBlock></SkeletonBlock>
                <SkeletonBlock></SkeletonBlock>
            </SkeletonWrapper>
        </>
    )
}

export default Skeleton;