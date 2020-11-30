import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { updateUserNameValue, updatePasswordValue, logIn, demo, demoValues } from '../../store/actions/auth';

const LogInForm = (props) => {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    

    useEffect(() => {
        if (props.msg) {
            const errDiv = window.document.querySelector(".errDiv");
            const errTitle = window.document.createElement("h4")
            const invalidCred = window.document.createElement("li");
            errTitle.innerHTML = `${props.title}`;
            errTitle.setAttribute("style", "font-size: 30px;font-weight: 700;color: red");
            invalidCred.innerHTML = `${props.msg}`;
            invalidCred.setAttribute("style", "font-size: 20px;color: black");
            errDiv.innerHTML = "";
            errTitle.appendChild(invalidCred);
            errDiv.appendChild(errTitle);
            if (props.msg === "The provided Username does not exist") {
                // window.document.getElementById("userNameField").style.borderColor = "red"
                // window.document.getElementById("passwordField").style.borderColor = ""
            }
            if (props.msg === "The provided Password is invalid") {
                // window.document.getElementById("userNameField").style.borderColor = ""
                // window.document.getElementById("passwordField").style.borderColor = "red"
            }
        }
    }, [props.msg])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.logIn(userName, password);
    }

    const updateUserName = (e) => {
        setUserName(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleDemo = (e) => {
        e.preventDefault();
        setUserName("Demo");
        setPassword("test");
        props.demoValues();
        props.demo();
    }

    const signUpButton = () => {
        history.push("/sign-up");
    }

    return (
        <>
            <div className="errDiv" style={{ display: "flex", justifyContent: "space-between" }}>
                <form className="log-in-form">
                    <h2>Log-In</h2>
                    <input style={{ borderColor: "red" }} onChange={updateUserName} type="text" value={userName} id="userNameField" placeholder="Username" required />
                    <input onChange={updatePassword} type="password" value={password} id="passwordField" placeholder="Password" required />
                    <button onClick={handleSubmit} type="submit" className="log-in-button">Submit</button>
                    <span style={{ marginLeft: "10px" }}>
                        <button className="demoButton" onClick={handleDemo} type="submit">Demo</button>
                    </span>
                    <span style={{ marginLeft: "10px" }}>
                        <button className="demoButton" onClick={signUpButton} type="submit">Sign-Up</button>
                    </span>
                </form>
            </div>
            <div>

            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        userName: state.auth.userName,
        password: state.auth.password,
        title: state.auth.title,
        msg: state.auth.msg,
    }
}

const mapDispatchToProps = dispatch => {
    return (
        {
            updateUserNameValue: (event) => dispatch(updateUserNameValue(event.target.value)),
            updatePasswordValue: (event) => dispatch(updatePasswordValue(event.target.value)),
            logIn: (userName, password) => dispatch(logIn(userName, password)),
            demo: () => dispatch(demo()),
            demoValues: () => dispatch(demoValues()),
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);