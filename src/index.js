import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import styled, {createGlobalStyle,ThemeProvider} from "styled-components";
import THEME from "./theme";

const Global = createGlobalStyle`
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

