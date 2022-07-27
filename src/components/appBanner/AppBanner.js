import avengersSrc from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';
import {Container} from "../app/App.style";
import {Banner, TextContent, Img} from './AppBanner.style';

const AppBanner = () => {
    return (
        <Container>
            <Banner>
                <Img src={avengersSrc} alt="Avengers"/>
                <TextContent>
                    New comics every week!<br/>
                    Stay tuned!
                </TextContent>
                <Img src={avengersLogo} alt="Avengers logo"/>
            </Banner>
        </Container>
    )
}

export default AppBanner;