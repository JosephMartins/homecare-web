import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Route path="/signup" component={SignUp}  />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;