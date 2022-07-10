import React,{lazy, useState,Suspense} from "react";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../../pages/404'))
const MainPage = lazy(() => import('../../pages/MainPage'));
const ComicsPage = lazy(() => import('../../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../../pages/SingleComicPage'));


const App = () => {
    const [selectedChar, setChar] = useState(null);
    function onCharSelected (id) {
        setChar(id);
    }
    return (
        <Router>
            <div className="container">
                <div className="app">
                    <AppHeader/>
                    <main>
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
                    </main>
                </div>
            </div>
        </Router>
    )
}

export default App;