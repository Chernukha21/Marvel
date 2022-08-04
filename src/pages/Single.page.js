import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarvelService from '../services/MarvelService';
import AppBanner from "../components/appBanner/AppBanner";
import setContent from "../utils/setContent";

const SinglePage = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {getComic, getCharacter, clearError, processing, setProcess} = useMarvelService();

    useEffect(() => {
        updateData()
    }, [id])

    const updateData = () => {
        clearError();

        switch (dataType) {
            case 'comic':
                getComic(id).then(onDataLoaded).then(() => setProcess('confirmed'));
                break;
            case 'character':
                getCharacter(id).then(onDataLoaded).then(() => setProcess('confirmed'));
        }
    }

    const onDataLoaded = (data) => {
        setData(data);
    }

    return (
        <>
            <AppBanner/>
            {setContent(processing,Component,data)}
        </>
    )
}

export default SinglePage;