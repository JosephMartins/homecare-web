import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import ForgotPassword from '../pages/ForgotPassword';

import Landing from '../pages/Landing';
import ProviderList from '../pages/ProviderList';
import ProviderForm from '../pages/ProviderForm';
import Profile from '../pages/Profile';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Route path="/signup" component={SignUp}  />
        <Route path="/forgot-password" component={ForgotPassword} />

        <Route path="/landing" component={Landing} />
        <Route path="/profile" component={Profile} />
        <Route path="/provider-list" component={ProviderList} />
        <Route path="/provider-form" component={ProviderForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;