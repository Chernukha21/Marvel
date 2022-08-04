import {Container} from "../../components/app/App.style";
import {Wrapper, Picture, InfoWrapper, Title, Description, Price, StyledLink} from "./SingleComic.page.style";


const SingleComicPage = ({data}) => {
    const {title, description, pageCount, thumbnail, language, price} = data;

    return (
        <Container>
            <Wrapper>
                <Picture src={thumbnail} alt={title}/>
                <InfoWrapper>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Description>{pageCount}</Description>
                    <Description>Language: {language}</Description>
                    <Price>{price}</Price>
                </InfoWrapper>
                <StyledLink to="/comics">Back to all</StyledLink>
            </Wrapper>
        </Container>
    )
}
export default SingleComicPage;