import React, {Component, useState} from "react";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import {MainPage,ComicsPage,SingleComicPage} from '../pages';
import Page404 from '../pages/404';

const App = () => {
    const [selectedChar, setChar] = useState(null);
    function onCharSelected (id) {
        setChar(id);
    }
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
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
                </main>
            </div>
        </Router>
    )
}

export default App;