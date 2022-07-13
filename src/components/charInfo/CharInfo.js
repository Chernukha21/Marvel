import React,{useEffect,useState} from 'react';
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../error/Error";
import Skeleton from "../skeleton/Skeleton";
import PropTypes from "prop-types";
import {Wrapper, CharBasic, Img, BtnWrapper, CharName, CharDescription, CharComic, CharComicList, CharComicListItem} from "./CharInfo.style";
import {Button,InsideButton,SecondaryInsideButton,SecondaryButton,MainButton} from "../buttons/Button.style";

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
            <CharBasic>
                <Img src={thumbnail} alt={name}/>
                <>
                    <CharName>{name}</CharName>
                    <BtnWrapper>
                        <MainButton as="a" href={homepage}>
                            <InsideButton>homepage</InsideButton>
                        </MainButton>
                        <SecondaryButton as="a" href={wiki}>
                            <SecondaryInsideButton>wiki</SecondaryInsideButton>
                        </SecondaryButton>
                    </BtnWrapper>
                </>
            </CharBasic>
            <CharDescription>
                {description}
            </CharDescription>
            <CharComic>Comics:</CharComic>
            <CharComicList>
                {comics.length > 0 ? null : 'There is no comics with this character'}
                {
                    comics.map((elem,index) => {
                        if(comics.length > 10) {
                            comics.length = 10;
                        }
                        return (
                            <CharComicListItem key={index}>
                                {elem.name}
                            </CharComicListItem>
                        )
                    })
                }
            </CharComicList>
        </>
    )
}


CharInfo.propTypes = {
    charId: PropTypes.number
}
export default CharInfo;