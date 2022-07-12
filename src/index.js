import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import styled,{ThemeProvider} from 'styled-components';
import './style/style.scss';
import THEME from "./theme";





ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <ThemeProvider theme={THEME}>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    );

