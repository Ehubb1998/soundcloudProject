import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PlaylistRoute = (props) => {
    const { isLoggedIn } = props;
    if (isLoggedIn === null) {
        return (
            <Redirect to="/log-in" />
        )
    }
    return (
        <Route {...props} />
    )
};

export default PlaylistRoute;