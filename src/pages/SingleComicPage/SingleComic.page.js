import { useParams, Link } from 'react-router-dom';
import React,{ useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../../components/spinner/Spinner';
import ErrorMessage from '../../components/error/Error';
import AppBanner from "../../components/appBanner/AppBanner";
import {Container} from "../../components/app/App.style";
import {Wrapper, Picture, InfoWrapper, Title, Description, Price, StyledLink} from "./SingleComic.page.style";


const SingleComicPage = () => {
    const {comicId} = useParams();
    const [comic, setComic] = useState(null);
    const {loading, error, getComic, clearError} = useMarvelService();

    useEffect(() => {
        updateComic()
    }, [comicId])

    const updateComic = () => {
        clearError();
        getComic(comicId)
            .then(onComicLoaded)
    }

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

    return (
        <>
            <AppBanner/>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({comic}) => {
    const {title, description, pageCount, thumbnail, language, price} = comic;

    return (
        <Container>
            <Wrapper>
                <Picture src={thumbnail} alt={title}/>
                <InfoWrapper>
                    <Title className="single-comic__name">{title}</Title>
                    <Description>{description}</Description>
                    <Description>{pageCount}</Description>
                    <Description>Language: {language}</Description>
                    <Price>{price}</Price>
                </InfoWrapper>
                <StyledLink to="/comics">Back to all</StyledLink>
            </Wrapper>
        </Container>
    )
}

export default SingleComicPage;