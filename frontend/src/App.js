import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import SignUpForm from './components/auth/SignUpForm';
import Homepage from './components/logged-in/Homepage';
import SplashPage from './components/SplashPage';
import LogInForm from './components/auth/LogInForm';
import LibraryRoute from './components/LibraryRoute';
import Library from './components/logged-in/Library';
import ProfileRoute from './components/ProfileRoute';
import Profile from './components/logged-in/Profile';
import PlaylistRoute from './components/PlaylistRoute';
import Playlists from './components/logged-in/Playlists';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <SplashPage isLoggedIn={props.token} />} />
        <Route exact path="/sign-up" render={() => <SignUpForm />} />
        <Route exact path="/log-in" component={LogInForm} />
        <PrivateRoute isLoggedIn={props.token} path="/homepage" render={() => <Homepage />} />
        <LibraryRoute isLoggedIn={props.token} path="/library" render={() => <Library />} />
        <ProfileRoute isLoggedIn={props.token} path="/profile" render={() => <Profile />} />
        <PlaylistRoute isLoggedIn={props.token} path="/playlist" render={() => <Playlists />} />
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
