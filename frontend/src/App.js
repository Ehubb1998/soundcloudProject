import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import SignUpForm from './components/auth/SignUpForm';
import Homepage from './components/Homepage';
import SplashPage from './components/SplashPage';
import LogInForm from './components/auth/LogInForm';
// import NavBar from './components/NavBar';

const App = (props) => {
  let userName = window.localStorage.getItem("SOUNDCLOUD_USERNAME");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <SplashPage isLoggedIn={props.token} />} />
        <Route exact path="/sign-up" render={() => <SignUpForm />} />
        <Route exact path="/log-in" component={LogInForm} />
        <PrivateRoute isLoggedIn={props.token} path="/homepage" render={() => <Homepage userName={userName} />} />
      </Switch>
    </BrowserRouter>
  )
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(App);
