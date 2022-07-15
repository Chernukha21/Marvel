import {useState, useEffect} from 'react';
import Spinner from "../spinner/Spinner";
import './randomChar.scss';
import mjolnirSrc from '../../resources/img/mjolnir.png';
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../error/Error";
import {Button, InsideButton, SecondaryInsideButton, SecondaryButton, MainButton} from "../buttons/Button.style";
import {
    Wrapper,
    StaticPart,
    Title,
    BlockPart,
    Img,
    InfoWrapper,
    Name,
    Description,
    ButtonsWrapper
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
        <Wrapper>
            {errorMessage}
            {spinner}
            {content}
            <StaticPart>
                <div>
                    <Title>
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </Title>
                    <Title>
                        Or choose another one
                    </Title>
                    <MainButton onClick={updateChar}>
                        <InsideButton>{loading ? isRequest : 'Try it'}</InsideButton>
                    </MainButton>
                </div>
                <div>
                    <img src={mjolnirSrc} alt="mjolnir"/>
                </div>
            </StaticPart>
        </Wrapper>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    return (
        <BlockPart>
            <Img src={thumbnail} alt="Random character"/>
            <InfoWrapper>
                <Name>{name}</Name>
                <Description>
                    {description}
                </Description>
                <ButtonsWrapper>
                    <MainButton as="a" href={homepage}>
                        <InsideButton>homepage</InsideButton>
                    </MainButton>
                    <SecondaryButton as="a" href={wiki}>
                        <SecondaryInsideButton>wiki</SecondaryInsideButton>
                    </SecondaryButton>
                </ButtonsWrapper>
            </InfoWrapper>
        </BlockPart>
    )
}

export default RandomChar;