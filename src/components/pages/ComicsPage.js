import React from 'react';
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
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