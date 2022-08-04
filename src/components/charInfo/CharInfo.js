import React,{useEffect,useState} from 'react';
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../error/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";
import PropTypes from "prop-types";
import {Wrapper, Basic, Img, BtnWrapper, Name, Description, Comic, ComicsList, Item} from "./CharInfo.style";
import { PrimaryButton } from "../buttons/Button.style";


function CharInfo(props) {
    const [char, setChar] = useState(null);
    const {loading,error,getCharacter,clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
    },[props.charId]);


    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        const {charId} = props;
        if(!charId) return;
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)

    }

    const skeleton = char || loading || error ? null : <Skeleton/>
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;
    return (
        <Wrapper>
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </Wrapper>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    return (
        <>
            <Basic>
                <Img src={thumbnail} alt={name}/>
                <>
                    <Name>{name}</Name>
                    <BtnWrapper>
                        <PrimaryButton as="a" href={homepage}>homepage</PrimaryButton>
                        <PrimaryButton variant="secondary" as="a" href={wiki}>wiki</PrimaryButton>
                    </BtnWrapper>
                </>
            </Basic>
            <Description>
                {description}
            </Description>
            <Comic>Comics:</Comic>
            <ComicsList>
                {comics.length > 0 ? null : 'There is no comics with this character'}
                {
                    comics.map((elem,index) => {
                        if(comics.length > 10) {
                            comics.length = 10;
                        }
                        return (
                            <Item key={index}>
                                {elem.name}
                            </Item>
                        )
                    })
                }
            </ComicsList>
        </>
    )
}


CharInfo.propTypes = {
    charId: PropTypes.number
}
export default CharInfo;