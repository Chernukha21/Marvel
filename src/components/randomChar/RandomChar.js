import {useState, useEffect} from 'react';
import mjolnirSrc from '../../resources/img/mjolnir.png';
import useMarvelService from "../../services/MarvelService";
import { PrimaryButton } from "../buttons/Button.style";
import {
    Wrapper,
    StaticPart,
    Title,
    BlockPart,
    Img,
    InfoWrapper,
    Name,
    Description,
    ButtonsWrapper,
    TextContent,
    GraphicContent
} from './RandomChar.style';
import setContent from "../../utils/setContent";

function RandomChar(props) {
    const [char, setChar] = useState(null);

    const {getCharacter, clearError, processing, setProcess} = useMarvelService();

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
        getCharacter(id)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'))
    }

    const isRequest = 'Request sended';
    return (
        <Wrapper>
            {setContent(processing,View,char)}
            <StaticPart>
                <TextContent>
                    <Title>
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </Title>
                    <Title>
                        Or choose another one
                    </Title>
                    <PrimaryButton onClick={updateChar}>{processing === 'loading' ? isRequest : 'Try it'}</PrimaryButton>
                </TextContent>
                <GraphicContent>
                    <img src={mjolnirSrc} alt="mjolnir"/>
                </GraphicContent>
            </StaticPart>
        </Wrapper>
    )
}

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki} = data;
    return (
        <BlockPart>
            <Img src={thumbnail} alt="Random character"/>
            <InfoWrapper>
                <Name>{name}</Name>
                <Description>
                    {description}
                </Description>
            </InfoWrapper>
            <ButtonsWrapper>
                <PrimaryButton as="a" href={homepage}>homepage</PrimaryButton>
                <PrimaryButton variant="secondary" as="a" href={wiki}>wiki</PrimaryButton>
            </ButtonsWrapper>
        </BlockPart>
    )
}

export default RandomChar;