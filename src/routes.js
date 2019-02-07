import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.jsx';
import Programmers from './components/programmers.jsx';
import Movies from './components/movies.jsx';
import NotFoundPage from './components/notFoundPage.jsx';

import Login from './components/auth/login.jsx'
import Register from './components/auth/register.jsx';
import Logout from './components/auth/logout.jsx';
import ForgotPassword from './components/auth/forgot_password.jsx';
import ResetPassword from './components/auth/reset_password.jsx';

import RequireAuth from './components/auth/require_auth.jsx';

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

