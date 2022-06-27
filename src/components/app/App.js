import React, {Component, useState} from "react";
import AppHeader from "../appHeader/AppHeader";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const App = () => {
    const [selectedChar, setChar] = useState(null);
    function onCharSelected (id) {
        setChar(id);
    }
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoundary>
                    <RandomChar/>
                </ErrorBoundary>
                <div className="char__content">
                    <CharList onCharSelected={onCharSelected}/>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
                <AppBanner/>
                <ComicsList/>
            </main>
        </div>
    )
}

export default App;