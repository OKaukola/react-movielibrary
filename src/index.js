import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';
import { combineReducers } from "redux";
import reduxThunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk'
import thunk from 'redux-thunk';
import cookie from 'react-cookie';
import routes from './routes';
import reducers from './reducers/index';
import ReactGA from 'react-ga';
import { AUTH_USER } from './actions/types';

////Test
const http = require('http');
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello World</h1>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
/////

require('./assets/stylesheets/base.scss');
require('./assets/stylesheets/lemonade.scss');
require('./assets/stylesheets/navigation.scss');

ReactGA.initialize('UA-000000-01');

function logPageView() {
  ReactGA.pageview(window.location.pathname);
}

const customMiddleWare = store => next => action => {
  console.log("Middleware triggered:", action);
  next(action);
}
const routingMiddleware = routerMiddleware(browserHistory)

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, customMiddleWare, routingMiddleware)(createStore)

const store = createStoreWithMiddleware(reducers,
  window.devToolsExtension ? window.devToolsExtension() : f => f)

const token = cookie.load('token');

if (token) {
  // Update application state. User has token and is probably authenticated
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={logPageView} />
  </Provider>,
  document.querySelector('.wrapper'));
