import {useState,useEffect,useRef,useMemo} from 'react';
import Spinner from '../spinner/Spinner';
import PropTypes from 'prop-types';
import ErrorMessage from '../error/ErrorMessage';
import useMarvelService from "../../services/MarvelService";
import {Item, Wrapper, Image, CharactersList, Name} from './CharList.style';
import {PrimaryButton} from "../buttons/Button.style";
import Skeleton from "../skeleton/Skeleton";

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


function CharList(props) {
    const [charList,setCharList] = useState([]);
    const [newItemLoading,setNewItemLoading] = useState(false);
    const [offset,setOffset] = useState(210);
    const [charEnded,setCharEnded] = useState(false);


    const {getAllCharacters, processing, setProcess} = useMarvelService();

    useEffect(() => {
        onRequest(offset,true);
    },[])

    const onRequest = (offset,initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if(newCharList.length < 9) {
            ended = true;
        }
        setCharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }
    function renderItems(arr) {
        const items =  arr.map((item,i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            return (
                <Item
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                        window.scrollTo({ top: 100, behavior: 'smooth' });
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }
                    }}
                    ref={el => itemRefs.current[i] = el}
                    key={i}>
                    <Image src={item.thumbnail} alt={item.name} style={imgStyle}/>
                    <Name>{item.name}</Name>
                </Item>
            )
        });


        return (
            <Wrapper>
                {items}
            </Wrapper>
        )
    }

    const elements = useMemo(() => {
        return setContent(processing, () => renderItems(charList), newItemLoading);
        // eslint-disable-next-line
    }, [processing]);

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('selected'));
        itemRefs.current[id].classList.add('selected');
        itemRefs.current[id].focus();
    }

    const message = `Characters finished`;
    return (
        <CharactersList>
            {elements}
            <PrimaryButton
                longitude="long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}
            >
                load more
            </PrimaryButton>
            <span>{charEnded && message}</span>
        </CharactersList>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}
export default CharList;