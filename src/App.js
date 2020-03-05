import React from 'react';
import {connect} from 'react-redux';

import Layout from './hoc/layout/Layout';
import {Route, Switch, Redirect} from 'react-router-dom';
//Pages
import ToDos from './containers/ToDos/ToDos';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';
import Logout from './containers/Auth/Logout/Logout';
import VerifyEmail from './containers/Auth/VerifyEmail/VerifyEmail';
import RecoverPassword from './containers/Auth/RecoverPassword/RecoverPassword';
const App = ({loggedIn, emailVerified}) => {
 let routes;
 if (loggedIn && !emailVerified) {
  routes = (
   <Switch>
    <Route exact path='/verify-email' component={VerifyEmail} />
    <Route exact path='/logout' component={Logout} />
    <Redirect to='/verify-email' />{' '}
   </Switch>
  );
 } else if (loggedIn && emailVerified) {
  routes = (
   <Switch>
    {' '}
    <Route exact path='/todos' component={ToDos} />
    <Route exact path='/logout' component={Logout} />
    <Redirect to='/' />{' '}
   </Switch>
  );
 } else {
  routes = (
   <Switch>
    {' '}
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
    <Route exact path='/recover' component={RecoverPassword} />
    <Redirect to='/login' />{' '}
   </Switch>
  );
 }

 return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({firebase}) => ({
 loggedIn: firebase.auth.uid,
 emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(App);
