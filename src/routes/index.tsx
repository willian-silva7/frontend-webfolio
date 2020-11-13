import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgottenPassword from '../pages/ForgottenPassword';
import ResetPassword from '../pages/ResetPassword';
import { Profile } from '../components/Header/styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgottenpassword" component={ForgottenPassword} />
        <Route path="/reset-password" component={ResetPassword} />

        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
