import React from "react";
import { useHistory } from 'react-router-dom';

const SplashPage = (props) => {
    const history = useHistory();

    const splashClick = () => {
        history.push("/log-in")
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "700px" }}>
                <div onClick={splashClick} className="splashDiv"></div>
            </div>
        </>
    )
}

export default SplashPage;