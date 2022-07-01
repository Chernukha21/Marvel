import React,{useState,useEffect,useRef} from 'react';
import {useHttp} from "../../hooks/http.hook";
import Spinner from '../spinner/Spinner';
import PropTypes from 'prop-types';
import ErrorMessage from '../error/Error';
import './charList.scss';
import useMarvelService from "../../services/MarvelService";

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
                <li
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                        // window.scrollTo({ top: 100, behavior: 'smooth' });
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }
                    }}
                    className="char__item"
                    ref={el => itemRefs.current[i] = el}
                    key={i}>
                    <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                    <div className="char__name">{item.name}</div>
                </li>
            )
        });

        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {items}
            </ul>
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
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
            <span>{charEnded && message}</span>
        </div>
    )

}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}
export default CharList;