import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../store/actions/auth';

const NavBar = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    let onHover = false;
    let selected;

    useEffect(() => {
        if (window.location.pathname === `/homepage`) {
            const liParent = window.document.getElementById("homeText");
            const ulText = liParent.firstChild;
            ulText.style.color = "white";
            ulText.style.backgroundColor = "black";
            ulText.style.outline = "0";
            selected = "homeText";
        }
        if (window.location.pathname === "/library") {
            const liParent = window.document.getElementById("libraryText");
            const ulText = liParent.firstChild;
            ulText.style.color = "white";
            ulText.style.backgroundColor = "black";
            ulText.style.outline = "0";
            selected = "libraryText";
        }
        if (window.location.pathname === "/playlist") {
            const liParent = window.document.getElementById("playlistText");
            const ulText = liParent.firstChild;
            ulText.style.color = "white";
            ulText.style.backgroundColor = "black";
            ulText.style.outline = "0";
            selected = "playlistText";
        }
        if (window.location.pathname === "/profile") {
            const liParent = window.document.getElementById("profileText");
            const ulText = liParent.firstChild;
            ulText.style.color = "white";
            ulText.style.backgroundColor = "black";
            ulText.style.outline = "0";
            selected = "profileText";
        }
    })

    const liHover = (e) => {
        const liParent = window.document.getElementById(e.currentTarget.id);

        if (liParent.id === selected) {
            const ulText = liParent.firstChild;
            ulText.style.cursor = "pointer";
            return;
        }
        if (onHover === false) {
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
        const liParent = window.document.getElementById(parentId);
        const ulText = liParent.firstChild;
        ulText.style.color = "";
        ulText.style.backgroundColor = "";
        ulText.style.outline = "";
        ulText.style.cursor = "";
        onHover = false;
    }

    const homeClick = () => {
        history.push(`/homepage`)
    }

    const libraryClick = () => {
        history.push("/library");
    }

    const playlistClick = () => {
        history.push("/playlist");
    }

    const profileClick = () => {
        history.push("/profile");
    }

    const logOutClick = () => {
        window.localStorage.clear();
        dispatch(logOut())
        window.location.href = "/";
    }
    return (
        <>
            <header id="navBar">
                <div style={{ width: "40px", height: "46px" }}></div>
                <div style={{ display: "block", width: "416px", height: "46px" }} id="header_left">
                    <nav className="navBar_left" role="navigation">
                        <ul className="ulText" style={{ float: "left", listStyle: "none", margin: "0", padding: "0", width: "416px", height: "46px" }}>
                            <li id="homeText" onClick={homeClick} onMouseEnter={liHover} onMouseLeave={liHover} style={{ display: "list-item", textAlign: "web", width: "104px", height: "46px" }}>
                                <a>Home</a>
                            </li>
                            <li id="libraryText" onClick={libraryClick} onMouseEnter={liHover} onMouseLeave={liHover} style={{ display: "list-item", textAlign: "web", width: "104px", height: "46px" }}>
                                <a>Library</a>
                            </li>
                            <li id="playlistText" onClick={playlistClick} onMouseEnter={liHover} onMouseLeave={liHover} style={{ display: "list-item", textAlign: "web", width: "104px", height: "46px" }}>
                                <a>Playlist</a>
                            </li>
                            <li id="profileText" onClick={profileClick} onMouseEnter={liHover} onMouseLeave={liHover} style={{ display: "list-itm", textAlign: "web", width: "104px", height: "46px" }}>
                                <a>Profile</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div style={{ display: "flex", width: "416px", height: "46px", justifyContent: "center" }}>
                    <div id="logo"></div>
                </div>
                <div style={{ display: "flex", width: "416px", height: "46px", justifyContent: "end" }}>
                    <nav className="navBar_left" role="navigation">
                        <ul className="ulText" style={{ float: "left", listStyle: "none", margin: "0", padding: "0", width: "416px", height: "46px" }}>
                            <li id="logOutText" onClick={logOutClick} onMouseEnter={liHover} onMouseLeave={liHover} style={{ display: "list-item", textAlign: "web", width: "104px", height: "46px" }}>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavBar;