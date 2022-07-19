import {useState,useEffect,useRef} from 'react';
import {useHttp} from "../../hooks/http.hook";
import Spinner from '../spinner/Spinner';
import PropTypes from 'prop-types';
import ErrorMessage from '../error/Error';
import './charList.scss';
import useMarvelService from "../../services/MarvelService";
import {Item, Wrapper, Image, CharactersList, Name} from './CharList.style';
import {LongButton,InsideButton} from "../buttons/Button.style";

function CharList(props) {
    const [charList,setCharList] = useState([]);
    const [newItemLoading,setNewItemLoading] = useState(false);
    const [offset,setOffset] = useState(210);
    const [charEnded,setCharEnded] = useState(false);


    const {loading,error,getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset,true);
    },[])

    const onRequest = (offset,initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
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

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    const items = renderItems(charList);
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;
    const message = `Characters finished`;
    return (
        <CharactersList>
            {errorMessage}
            {spinner}
            {items}
            <LongButton
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}
            >
                <InsideButton>load more</InsideButton>
            </LongButton>
            <span>{charEnded && message}</span>
        </CharactersList>
    )

}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}
export default CharList;