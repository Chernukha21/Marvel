import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import styled, {createGlobalStyle,ThemeProvider} from "styled-components";
import THEME from "./theme";

const Global = createGlobalStyle`
  
* {
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
    font-family: "Roboto Condensed", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
ul,
li,
dl {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}
a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    &:hover {
        text-decoration: none;
        color: inherit;
    }
}
p {
    margin: 0;
    padding: 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
@keyframes pulse {
    0% {
        opacity: 1
    }
    50% {
        opacity: .4
    }
    100% {
        opacity: 1
    }
}
.pulse {
    animation: pulse 1.5s ease-in-out .5s infinite;
}
`



ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <ThemeProvider theme={THEME}>
                <Global/>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    );

