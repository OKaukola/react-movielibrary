import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.jsx';
import Programmers from './components/programmers';
import Movies from './components/movies';
import NotFoundPage from './components/notFoundPage';

import Login from './components/auth/login'
import Register from './components/auth/register';
import Logout from './components/auth/logout';
import ForgotPassword from './components/auth/forgot_password';
import ResetPassword from './components/auth/reset_password';

import RequireAuth from './components/auth/require_auth';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Login} />
    <Route path='login' component={Login} />
    <Route path='programmers' component={RequireAuth(Programmers)} />
    <Route path='movies' component={RequireAuth(Movies)} />
    <Route path='register' component={RequireAuth(Register)} />
    <Route path="logout" component={Logout} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

