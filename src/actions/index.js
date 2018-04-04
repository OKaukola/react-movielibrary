'use-strict';

import axios from 'axios';
import { SUBMIT_MOVIE, ERROR_RESPONSE, TEST_ACTION, GET_MOVIE, DELETE_MOVIE, SELECT_MOVIE, MOVIES_SUCCESFULLY } from './types';
import { STATIC_ERROR, FETCH_USER } from './types';
import { logoutUser } from './auth';
export const CLIENT_ROOT_URL = 'http://localhost:8080';
export const API_URL = 'http://localhost:3000/api';


/*export function errorHandler(error) {
  return {
    type: ERROR_RESPONSE,
    payload: error
  };
}*/

/////MOVIE ACTIONS/////

export function submitMovie({ name, year, imdb }) {
  return function (dispatch) {
    axios.post(`${API_URL}/movies/create-new-movie`, { name, year, imdb })
      .then(response => {
        dispatch({
          type: SUBMIT_MOVIE,
          payload: response.data
        });
      })
      .catch(response => dispatch(errorHandler(response.data.error)))
      window.location.href = `${CLIENT_ROOT_URL}/movies`;
  }
}

export function deleteMovie(_id) {
  return function (dispatch) {
    axios.post(`${API_URL}/movies/delete-movie`, {"_id": _id})
      .then(response => {
        dispatch({
          type: DELETE_MOVIE,
          payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
      window.location.href = `${CLIENT_ROOT_URL}/movies`;
  }
}

export function getMovie() {
  return function (dispatch) {
    dispatch({
      type: MOVIES_SUCCESFULLY
    })
    return axios.get(`${API_URL}/movies/get-movies`)
      .then(response => {
        dispatch({
          type: GET_MOVIE,
          payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export function selectMovie(data) {
  return dispatch => {
    dispatch({
      type: SELECT_MOVIE,
      payload: data
    })
  }
}

//= ===============================
// Utility actions
//= ===============================

export function fetchUser(uid) {
  return function (dispatch) {
    axios.get(`${API_URL}/user/${uid}`, {
      headers: { Authorization: cookie.load('token') },
    })
      .then((response) => {
        dispatch({
          type: FETCH_USER,
          payload: response.data.user,
        });
      })
      .catch(response => dispatch(errorHandler(response.data.error)));
  };
}

export function errorHandler(dispatch, error, type) {
  console.log('Error type: ', type);
  console.log(error);

  let errorMessage = error.response ? error.response.data : error;

  // NOT AUTHENTICATED ERROR
  if (error.status === 401 || error.response.status === 401) {
    errorMessage = 'You are not authorized to do this.';
    return dispatch(logoutUser(errorMessage));
  }

  dispatch({
    type,
    payload: errorMessage,
  });
}

// Post Request
export function postData(action, errorType, isAuthReq, url, dispatch, data) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.load('token') } };
  }

  axios.post(requestUrl, data, headers)
    .then((response) => {
      dispatch({
        type: action,
        payload: response.data,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, errorType);
    });
}

// Get Request
export function getData(action, errorType, isAuthReq, url, dispatch) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.load('token') } };
  }

  axios.get(requestUrl, headers)
    .then((response) => {
      dispatch({
        type: action,
        payload: response.data,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, errorType);
    });
}

// Put Request
export function putData(action, errorType, isAuthReq, url, dispatch, data) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.load('token') } };
  }

  axios.put(requestUrl, data, headers)
    .then((response) => {
      dispatch({
        type: action,
        payload: response.data,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, errorType);
    });
}

// Delete Request
export function deleteData(action, errorType, isAuthReq, url, dispatch) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.load('token') } };
  }

  axios.delete(requestUrl, headers)
    .then((response) => {
      dispatch({
        type: action,
        payload: response.data,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, errorType);
    });
}

//= ===============================
// Static Page actions
//= ===============================
export function sendContactForm({ name, emailAddress, message }) {
  return function (dispatch) {
    axios.post(`${API_URL}/communication/contact`, { name, emailAddress, message })
      .then((response) => {
        dispatch({
          type: SEND_CONTACT_FORM,
          payload: response.data.message,
        });
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, STATIC_ERROR);
      });
  };
}

