import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import {CriticalError, Label, SearchError, StyledForm, Success, Wrapper} from "./SearchForm.style";
import {PrimaryButton} from "../buttons/Button.style";

const SearchForm = () => {
    const [char, setChar] = useState(null);
    const {loading, error, getCharacterByName, clearError} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = (name) => {
        clearError();

        getCharacterByName(name)
            .then(onCharLoaded);
    }

    const errorMessage = error ? <CriticalError/> : null;
    const results = !char ? null : char.length > 0 ?
        <Wrapper>
            <Success>There is! Visit {char[0].name} page?</Success>
            <PrimaryButton as={Link} to={`/characters/${char[0].id}`} variant="secondary">
                To page
            </PrimaryButton>
        </Wrapper> :
        <SearchError>
            The character was not found. Check the name and try again
        </SearchError>;


    return (
        <StyledForm>
            <Formik
                initialValues = {{
                    charName: ''
                }}
                validationSchema = {Yup.object({
                    charName: Yup.string().required('This field is required')
                })}
                onSubmit = { ({charName}) => {
                    updateChar(charName);
                }}
            >
                <Form>
                    <Label htmlFor="charName">Or find a character by name:</Label>
                    <Wrapper>
                        <Field
                            id="charName"
                            name='charName'
                            type='text'
                            placeholder="Enter name"/>
                        <PrimaryButton
                            type='submit'
                            disabled={loading}
                        >
                            find
                        </PrimaryButton>
                    </Wrapper>
                    <FormikErrorMessage component="div" name="charName" />
                </Form>
            </Formik>
            {results}
            {errorMessage}
        </StyledForm>
    )
}

export default SearchForm;