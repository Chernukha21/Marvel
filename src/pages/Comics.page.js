import React from 'react';
import ComicsList from "../components/comicsList/ComicsList";
import AppBanner from "../components/appBanner/AppBanner";
import {Route} from "react-router-dom";

const ComicsPage = (props) => {
    return(
        <>
            <AppBanner/>
            <ComicsList/>
        </>
    )
}
export default ComicsPage;