import React from 'react';
import NavBar from '../NavBar';
// import BottomBar from './bar';

const Homepage = (props) => {
    return (
        <>
            <div style={{ height: "46px" }}>
                <NavBar />
            </div>
            <div>
                <h1>Homepage</h1>
                {/* <BottomBar /> */}
            </div>
        </>
    )
}

export default Homepage; 