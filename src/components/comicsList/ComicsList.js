import React,{useState, useEffect} from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../error/Error';
import {Link} from 'react-router-dom';
// import './comicsList.scss';
import {InsideButton, LongButton} from "../buttons/Button.style";
import {ComicsListWrapper, ComicsGridWrapper,ComicsGridItem, ComicImage, ComicName, ComicPrice} from "./ComicList.style";

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }
        setComicsList([...comicsList, ...newComicsList]);
        setNewItemLoading(false);
        setOffset(offset + 8);
        setComicsEnded(ended);
    }

    function renderItems (arr) {
        const items = arr.map((item, i) => {
            return (
                <ComicsGridItem key={i}>
                    <Link to={`/comics/${item.id}`}>
                        <ComicImage src={item.thumbnail} alt={item.title} />
                        <ComicName>{item.title}</ComicName>
                        <ComicPrice>{item.price}</ComicPrice>
                    </Link>
                </ComicsGridItem>
            )
        })

        return (
            <ComicsGridWrapper>
                {items}
            </ComicsGridWrapper>
        )
    }

    const items = renderItems(comicsList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <ComicsListWrapper>
            {errorMessage}
            {spinner}
            {items}
            <LongButton
                disabled={newItemLoading}
                style={{'display' : comicsEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <InsideButton>load more</InsideButton>
            </LongButton>
        </ComicsListWrapper>
    )
}

export default ComicsList;