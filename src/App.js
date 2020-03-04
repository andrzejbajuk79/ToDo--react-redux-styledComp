import React from 'react';
import Layout from './hoc/layout/Layout';
import {Route, Switch, Redirect} from 'react-router-dom';
//Pages
import Home from './containers/Home/Home';
import ToDos from './containers/ToDos/ToDos';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';
const App = () => {
 return (
  <Layout>
   <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/todos' component={ToDos} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
    <Redirect to='/' />
   </Switch>
  </Layout>
 );
};

export default App;
