import React, {useState, useEffect} from 'react';
import Spinner from "../spinner/Spinner";
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../error/Error";
import {Button, InsideButton, SecondaryInsideButton, SecondaryButton, MainButton} from "../buttons/Button.style";
import {
    RandomCharWrapper,
    RandomCharStaticPart,
    RandomCharTitle,
    RandomCharBlockPart,
    RandomCharImg,
    RandomCharInfoWrapper,
    RandomCharName,
    RandomCharDescription,
    RandomCharButtonsWrapper
} from './RandomChar.style';

function RandomChar(props) {
    const [char, setChar] = useState(null);

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
        // const timerId = setInterval(updateChar, 60000);
        // return () => {
        //     clearInterval(timerId)
        // }
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
    }


    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
        getCharacter(id).then(onCharLoaded);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;
    const isRequest = 'Request sended';
    return (
        <RandomCharWrapper>
            {errorMessage}
            {spinner}
            {content}
            <RandomCharStaticPart>
                <div>
                    <RandomCharTitle>
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </RandomCharTitle>
                    <RandomCharTitle>
                        Or choose another one
                    </RandomCharTitle>
                    <MainButton onClick={updateChar}>
                        <InsideButton>{loading ? isRequest : 'Try it'}</InsideButton>
                    </MainButton>
                </div>
                <div>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </RandomCharStaticPart>
        </RandomCharWrapper>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    return (
        <RandomCharBlockPart>
            <RandomCharImg src={thumbnail} alt="Random character"/>
            <RandomCharInfoWrapper>
                <RandomCharName>{name}</RandomCharName>
                <RandomCharDescription>
                    {description}
                </RandomCharDescription>
                <RandomCharButtonsWrapper>
                    <MainButton as="a" href={homepage}>
                        <InsideButton>homepage</InsideButton>
                    </MainButton>
                    <SecondaryButton as="a" href={wiki}>
                        <SecondaryInsideButton>wiki</SecondaryInsideButton>
                    </SecondaryButton>
                </RandomCharButtonsWrapper>
            </RandomCharInfoWrapper>
        </RandomCharBlockPart>
    )
}
export default RandomChar;