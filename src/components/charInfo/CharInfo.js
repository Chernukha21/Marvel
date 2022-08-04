import React,{useEffect,useState} from 'react';
import useMarvelService from "../../services/MarvelService";
import PropTypes from "prop-types";
import {Wrapper, Basic, Img, BtnWrapper, Name, Description, Comic, ComicsList, Item} from "./CharInfo.style";
import { PrimaryButton } from "../buttons/Button.style";
import setContent from "../../utils/setContent";


function CharInfo(props) {
    const [char, setChar] = useState(null);
    const {getCharacter,clearError, processing, setProcess} = useMarvelService();

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
            .then(() => setProcess('confirmed'));
    }


    return (
        <Wrapper>
            {setContent(processing, View, char)}
        </Wrapper>
    )
}

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = data;
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