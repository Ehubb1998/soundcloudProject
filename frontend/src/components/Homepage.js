import React from 'react';
import NavBar from './NavBar';

const Homepage = (props) => {
    return (
        <>
            <div style={{ height: "46px" }}>
                <NavBar />
            </div>
            <div>
                <h1>Homepage</h1>
            </div>
        </>
    )
}

export default Homepage;