import React from 'react';

const NavBar = (props) => {
    return (
        <>
            <header id="navBar">
                <div style={{ display: "block" }} id="header_left">
                    <nav className="navBar_left" role="navigation">
                        <ul className style={{ float: "left", listStyle: "none", margin: "0", padding: "0" }}>
                            <li style={{ display: "list-iten", textAlign: "center" }}>
                                <a className="liText">Home</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavBar;