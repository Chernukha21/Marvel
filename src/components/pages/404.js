import ErrorMessage from "../error/Error";
import {Link} from "react-router-dom";
import React from 'react';

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link to="/" style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>
                Back to main page
            </Link>
        </div>
    )
}
export default Page404;