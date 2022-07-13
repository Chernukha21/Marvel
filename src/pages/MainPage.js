import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
import decoration from '../resources/img/vision.png';
import {Route,Switch} from "react-router-dom";
import React, {Component, useState} from "react";
import {VisionImage} from "../components/app/App.style";
import {CharContentWrapper} from "./MainPage.style";

const MainPage = (props) => {
    const [selectedChar, setChar] = useState(null);
    function onCharSelected (id) {
        setChar(id);
    }
    return(
        <>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <CharContentWrapper>
                <CharList onCharSelected={onCharSelected}/>
                <ErrorBoundary>
                    <CharInfo charId={selectedChar}/>
                </ErrorBoundary>
            </CharContentWrapper>
            <VisionImage src={decoration} alt="vision"/>
        </>
    )
}
export default MainPage;