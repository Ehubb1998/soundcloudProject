import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { updateEmailValue, updateUserNameValue, updatePasswordValue, updateCPValue, signUp } from '../../store/actions/auth';


const SignUpForm = (props) => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("")



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
            if (props.msg === "Please fill out First Name field") {
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("firstNameField").style.borderColor = "red"
                window.document.getElementById("firstNameField").style.borderWidth = "3px"
                window.document.getElementById("userNameField").style.borderColor = ""
                window.document.getElementById("passwordField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = ""
            }
            if (props.msg === "Please fill out First Name and Password fields") {
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("firstNameField").style.borderColor = "red"
                window.document.getElementById("firstNameField").style.borderWidth = "3px"
                window.document.getElementById("userNameField").style.borderColor = ""
                window.document.getElementById("passwordField").style.borderColor = "red"
                window.document.getElementById("passwordField").style.borderWidth = "3px"
                window.document.getElementById("cpField").style.borderColor = "red"
                window.document.getElementById("cpField").style.borderWidth = "3px"
            }
            if (props.msg === "Please fill out First Name and Username fields") {
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("userNameField").style.borderColor = "red"
                window.document.getElementById("userNameField").style.borderWidth = "3px"
                window.document.getElementById("firstNameField").style.borderColor = "red"
                window.document.getElementById("firstNameField").style.borderWidth = "3px"
                window.document.getElementById("passwordField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = ""
            }
            if (props.msg === "Please fill out First Name and Email fields") {
                window.document.getElementById("emailField").style.borderColor = "red"
                window.document.getElementById("emailField").style.borderWidth = "3px"
                window.document.getElementById("firstNameField").style.borderColor = "red"
                window.document.getElementById("firstNameField").style.borderWidth = "3px"
                window.document.getElementById("userNameField").style.borderColor = ""
                window.document.getElementById("passwordField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = ""
            }
            if (props.msg === "Please fill out Email field") {
                window.document.getElementById("emailField").style.borderColor = "red"
                window.document.getElementById("emailField").style.borderWidth = "3px"
                window.document.getElementById("userNameField").style.borderColor = ""
                window.document.getElementById("passwordField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = ""
            }
            if (props.msg === "Please fill out Username field") {
                window.document.getElementById("userNameField").style.borderColor = "red"
                window.document.getElementById("userNameField").style.borderWidth = "3px"
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("passwordField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = ""
            }
            if (props.msg === "Sorry, that Username already exists") {
                window.document.getElementById("userNameField").style.borderColor = "red"
                window.document.getElementById("userNameField").style.borderWidth = "3px"
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("passwordField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = ""
            }
            if (props.msg === "Please follow Password requirements") {
                window.document.getElementById("passwordField").style.borderColor = "red"
                window.document.getElementById("passwordField").style.borderWidth = "3px"
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("userNameField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = "red"
                window.document.getElementById("cpField").style.borderWidth = "3px"
            }
            if (props.msg === "Password and Confirmed Password must match") {
                window.document.getElementById("passwordField").style.borderColor = "red"
                window.document.getElementById("passwordField").style.borderWidth = "3px"
                window.document.getElementById("cpField").style.borderColor = "red"
                window.document.getElementById("cpField").style.borderWidth = "3px"
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("userNameField").style.borderColor = ""
            }
            if (props.msg === "Please fill out all required fields") {
                window.document.getElementById("emailField").style.borderColor = "red"
                window.document.getElementById("emailField").style.borderWidth = "3px"
                window.document.getElementById("userNameField").style.borderColor = "red"
                window.document.getElementById("userNameField").style.borderWidth = "3px"
                window.document.getElementById("firstNameField").style.borderColor = "red"
                window.document.getElementById("firstNameField").style.borderWidth = "3px"
                window.document.getElementById("passwordField").style.borderColor = "red"
                window.document.getElementById("passwordField").style.borderWidth = "3px"
                window.document.getElementById("cpField").style.borderColor = "red"
                window.document.getElementById("cpField").style.borderWidth = "3px"
            }
            if (props.msg === "Please fill out Email and Username fields") {
                window.document.getElementById("emailField").style.borderColor = "red"
                window.document.getElementById("emailField").style.borderWidth = "3px"
                window.document.getElementById("userNameField").style.borderColor = "red"
                window.document.getElementById("userNameField").style.borderWidth = "3px"
                window.document.getElementById("passwordField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = ""
            }
            if (props.msg === "Please fill out Username and Password fields") {
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("userNameField").style.borderColor = "red"
                window.document.getElementById("userNameField").style.borderWidth = "3px"
                window.document.getElementById("passwordField").style.borderColor = "red"
                window.document.getElementById("passwordField").style.borderWidth = "3px"
                window.document.getElementById("cpField").style.borderColor = "red"
                window.document.getElementById("cpField").style.borderWidth = "3px"
            }
            if (props.msg === "Please fill out Email and Password fields") {
                window.document.getElementById("emailField").style.borderColor = "red"
                window.document.getElementById("emailField").style.borderWidth = "3px"
                window.document.getElementById("userNameField").style.borderColor = ""
                window.document.getElementById("passwordField").style.borderColor = "red"
                window.document.getElementById("passwordField").style.borderWidth = "3px"
                window.document.getElementById("cpField").style.borderColor = "red"
                window.document.getElementById("cpField").style.borderWidth = "3px"
            }
        }
    }, [props.msg])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp(userName, email, password, confirmedPassword);
    }

    const updateUserName = (e) => {
        setUserName(e.target.value);
    }

    const updateFirstName = (e) => {
        setFirstName(e.targ.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const updateConfirmedPassword = (e) => {
        setConfirmedPassword(e.target.value);
    }

    return (
        <>
            <div className="create-user-form" style={{ backgroundColor: "darkorange", borderRadius: "18px" }}>
                <Form>
                    <h1 id="signin-header">Sign Up to listen to your favorite Vibes!</h1>
                    <div className="errDiv"></div>
                    <p>Use 8 or more characters with at least 1 uppercase letter and a mix of numbers and/or symbols</p>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={updateUserName} value={userName} type="text" id="userNameField" placeholder="Enter Username" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onChange={updateFirstName} type="text" value={firstName} id="firstNameField" placeholder="Enter First Name" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={updateEmail} type="email" value={email} id="emailField" placeholder="Enter Email" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={updatePassword} type="password" value={password} id="passwordField" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onChange={updateConfirmedPassword} type="password" value={confirmedPassword} id="cpField" required />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit} type="submit" className="create-user-button">Create</Button>
                </Form>
            </div>
            <div>

            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        userName: state.auth.userName,
        password: state.auth.password,
        CP: state.auth.CP,
        title: state.auth.title,
        msg: state.auth.msg,
    }
}

const mapDispatchToProps = dispatch => {
    return (
        {
            updateEmailValue: (event) => dispatch(updateEmailValue(event.target.value)),
            updateUserNameValue: (event) => dispatch(updateUserNameValue(event.target.value)),
            updatePasswordValue: (event) => dispatch(updatePasswordValue(event.target.value)),
            updateCPValue: (event) => dispatch(updateCPValue(event.target.value)),
            signUp: (userName, email, password, confirmedPassword) => dispatch(signUp(userName, email, password, confirmedPassword)),
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);