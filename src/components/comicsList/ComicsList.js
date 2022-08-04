import {useState, useEffect} from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../error/ErrorMessage';
import {Link} from 'react-router-dom';
import {PrimaryButton} from "../buttons/Button.style";
import {Wrapper, Name, Price, GridWrapper, GridItem, Image} from './ComicList.style';

const setContent = (processing, Component, newItemLoading) => {
    switch (processing) {
        case 'waiting':
            return <Spinner/>;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
        case 'confirmed':
            return <Component/>;
        case 'error':
            return <ErrorMessage/>;
        default:
            throw new Error('Unexpected process state');
    }
}

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics, processing, setProcess} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
            .then(() => setProcess('confirmed'))
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

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            return (
                <GridItem key={i}>
                    <Link to={`/comics/${item.id}`}>
                        <Image src={item.thumbnail} alt={item.title}/>
                        <Name>{item.title}</Name>
                        <Price>{item.price}</Price>
                    </Link>
                </GridItem>
            )
        })

        return (
            <GridWrapper>
                {items}
            </GridWrapper>
        )
    }

    return (
        <Wrapper>
            {setContent(processing, () => renderItems(comicsList), newItemLoading)}
            <PrimaryButton
                longitude="long"
                disabled={newItemLoading}
                style={{'display': comicsEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}
            >
                load more
            </PrimaryButton>
        </Wrapper>
    )
}

export default ComicsList;