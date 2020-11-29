import React from 'react';
import { useHistory } from 'react-router-dom';

const NavBar = (props) => {
    const history = useHistory();
    let onHover = false;
    const liHover = (e) => {
        if (onHover === false) {
            const liParent = window.document.getElementById(e.currentTarget.id);
            const ulText = liParent.firstChild;
            ulText.style.color = "white";
            ulText.style.backgroundColor = "black";
            ulText.style.outline = "0";
            ulText.style.cursor = "pointer";
            onHover = true;
            
        } else {
            liUnHover(e.currentTarget.id)
        }
    }

    const liUnHover = (parentId) => {
        console.log(parentId);
        const liParent = window.document.getElementById(parentId);
        const ulText = liParent.firstChild;
        ulText.style.color = "";
        ulText.style.backgroundColor = "";
        ulText.style.outline = "";
        ulText.style.cursor = "";
        onHover = false;
    }

    // const homeClick = () => {
    //     history
    // }
    return (
        <>
            <header id="navBar">
                <div style={{ width: "40px", height: "46px" }}></div>
                <div style={{ display: "block", width: "416px", height: "46px" }} id="header_left">
                    <nav className="navBar_left" role="navigation">
                        <ul className="ulText" style={{ float: "left", listStyle: "none", margin: "0", padding: "0", width: "416px", height: "46px" }}>
                            <li id="homeText" onMouseEnter={liHover} onMouseLeave={liHover} style={{ display: "list-item", textAlign: "web", width: "104px", height: "46px" }}>
                                <a>Home</a>
                            </li>
                            <li id="libraryText" onClick={history.push("/library")} onMouseEnter={liHover} onMouseLeave={liHover} style={{ display: "list-item", textAlign: "web", width: "104px", height: "46px" }}>
                                <a>Library</a>
                            </li>
                            <li id="playlistText" onMouseEnter={liHover} onMouseLeave={liHover} style={{ display: "list-item", textAlign: "web", width: "104px", height: "46px" }}>
                                <a>Playlist</a>
                            </li>
                            <li id="profileText" onMouseEnter={liHover} onMouseLeave={liHover} style={{ display: "list-itm", textAlign: "web", width: "104px", height: "46px" }}>
                                <a>Profile</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div style={{ display: "flex", width: "416px", height: "46px", justifyContent: "center" }}>
                    <div id="logo"></div>
                </div>
            </header>
        </>
    )
}

export default NavBar;