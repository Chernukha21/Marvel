import React,{useState,useEffect} from 'react';
import Spinner from "../spinner/Spinner";
import './randomChar.scss';
import mjolnirSrc from '../../resources/img/mjolnir.png';
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../error/Error";
import { PrimaryButton } from "../buttons/Button.style";

function RandomChar (props){
    const [char, setChar] = useState(null);

    const {loading,error,getCharacter,clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
        // const timerId = setInterval(updateChar, 60000);
        // return () => {
        //     clearInterval(timerId)
        // }
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
    }



    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
        getCharacter(id).then(onCharLoaded);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;
    const isRequest = 'Request sended';
    return (
        <div className="randomchar">
            {errorMessage}
            {spinner}
            {content}
            <div className="randomchar__static">
                <div>
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <PrimaryButton onClick={updateChar}>{loading ? isRequest : 'Try it'}</PrimaryButton>
                </div>
                <div>
                    <img src={mjolnirSrc} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        </div>
    )

}
const View = ({char}) =>{
    const {name,description, thumbnail, homepage,wiki} = char;
    return(
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img"/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <PrimaryButton as="a" href={homepage}>homepage</PrimaryButton>
                    <PrimaryButton variant="secondary" as="a" href={wiki}>wiki</PrimaryButton>
                </div>
            </div>
        </div>
    )
}
export default RandomChar;