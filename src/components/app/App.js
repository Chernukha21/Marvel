import React, {lazy, useState, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
import { Wrapper, MainTag} from "./App.style";

const Page404 = lazy(() => import('../../pages/404'))
const MainPage = lazy(() => import('../../pages/MainPage/Main.page'));
const ComicsPage = lazy(() => import('../../pages/Comic.page'));
const SingleComicPage = lazy(() => import('../../pages/SingleComicPage/SingleComic.page'));
const SingleCharacterPage = lazy(()=> import('../../pages/SingleCharacterPage/SingleCharacter.page'));
const SinglePage = lazy(()=> import('../../pages/Single.page'));

const App = () => {
    const [selectedChar, setChar] = useState(null);

    function onCharSelected(id) {
        setChar(id);
    }

    return (
        <Router>
            <Wrapper>
                <AppHeader/>
                <MainTag>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path="/">
                                <MainPage/>
                            </Route>
                            <Route exact path="/comics">
                                <ComicsPage/>
                            </Route>
                            <Route exact path="/comics/:id">
                                <SinglePage Component={SingleComicPage} dataType='comic'/>
                            </Route>
                            <Route exact path="/characters/:id">
                                <SinglePage Component={SingleCharacterPage} dataType='character'/>
                            </Route>
                            <Route path="*">
                                <Page404/>
                            </Route>
                        </Switch>
                    </Suspense>
                </MainTag>
            </Wrapper>
        </Router>
    )
}

export default App;