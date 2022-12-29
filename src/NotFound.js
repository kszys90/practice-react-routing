import React from 'react';
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <h1>Error 404</h1>
            <p>Page doesn't exists</p>
            <p>
                <NavLink to="/">Go back to Main Page</NavLink>
            </p>
        </>
    );
}

export default NotFound;

