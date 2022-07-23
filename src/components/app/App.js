import React, {lazy, useState, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
import {Container, Wrapper, MainTag} from "./App.style";

const Page404 = lazy(() => import('../../pages/404'))
const MainPage = lazy(() => import('../../pages/MainPage'));
const ComicsPage = lazy(() => import('../../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../../pages/SingleComicPage/SingleComicPage'));


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
                            <Route exact path="/comics/:comicId">
                                <SingleComicPage/>
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