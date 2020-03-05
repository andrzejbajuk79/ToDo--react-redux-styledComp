import React from 'react';
import {connect} from 'react-redux';

import Layout from './hoc/layout/Layout';
import {Route, Switch, Redirect} from 'react-router-dom';
//Pages
import ToDos from './containers/ToDos/ToDos';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';
import Logout from './containers/Auth/Logout/Logout';
const App = ({loggedIn}) => {
 let routes;
 if (loggedIn) {
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
    <Redirect to='/login' />{' '}
   </Switch>
  );
 }

 return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({firebase}) => ({
 loggedIn: firebase.auth.uid ? true : null,
});

export default connect(mapStateToProps)(App);
