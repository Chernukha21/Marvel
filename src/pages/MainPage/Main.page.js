import RandomChar from "../../components/randomChar/RandomChar";
import CharList from "../../components/charList/CharList";
import CharInfo from "../../components/charInfo/CharInfo";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/vision.png';
import {Route, Switch} from "react-router-dom";
import {useState} from "react";
import {VisionImage} from "../../components/app/App.style";
import {RightPart, Wrapper} from "./Main.page.style";
import SearchForm from "../../components/searchForm/SearchForm";

const MainPage = (props) => {
    const [selectedChar, setChar] = useState(null);

    function onCharSelected(id) {
        setChar(id);
    }

    return (
        <>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <Wrapper>
                <CharList onCharSelected={onCharSelected}/>
                <RightPart>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>
                    <SearchForm/>
                </RightPart>
                <VisionImage src={decoration} alt="vision"/>
            </Wrapper>
        </>
    )
}
export default MainPage;