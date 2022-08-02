import {Container} from "../../components/app/App.style";
import {Wrapper,Picture,InfoWrapper,Title,Description } from "./SingleCharacter.style";
import {StyledLink} from "../SingleComicPage/SingleComic.page.style";


const SingleCharacterPage = ({data}) => {

    const {name, description, thumbnail} = data;

    return (
        <Container>
            <Wrapper>
                <Picture src={thumbnail} alt={name}/>
                <InfoWrapper>
                    <Title>{name}</Title>
                    <Description>{description}</Description>
                </InfoWrapper>
                <StyledLink to="/">Back to all</StyledLink>
            </Wrapper>
        </Container>
    )
}

export default SingleCharacterPage;