import React,{useEffect,useState} from 'react';
import './charInfo.scss';
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../error/Error";
import Skeleton from "../skeleton/Skeleton";
import PropTypes from "prop-types";

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
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There is no comics with this character'}
                {
                    comics.map((elem,index) => {
                        if(comics.length > 10) {
                            comics.length = 10;
                        }
                        return (
                            <li key={index} className="char__comics-item">
                                {elem.name}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}


CharInfo.propTypes = {
    charId: PropTypes.number
}
export default CharInfo;