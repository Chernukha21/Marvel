import errorGif from './error.gif';
import React from 'react';

const ErrorMessage = () => {
    return(
        <div>
            <img
                style={{
                    display: 'block',
                    width: '250px',
                    height: '250px',
                    objectFit: 'contain',
                    margin: '0 auto'
                }}
                src={errorGif} alt="error"
            />
        </div>

    )
}
export default ErrorMessage;