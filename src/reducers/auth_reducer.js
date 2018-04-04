import { List, Map } from 'immutable';
import update from 'react-addons-update';

import { TEST_ACTION, ERROR_RESPONSE } from '../actions/types';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST, PROTECTED_TEST } from '../actions/types';

const INTIAL_STATE = { message: '', error: '' };

export default function (state = INTIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', message: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false, error: action.payload };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FORGOT_PASSWORD_REQUEST:
      return { ...state, message: action.payload.message };
    case RESET_PASSWORD_REQUEST:
      return { ...state, message: action.payload.message };
    case PROTECTED_TEST:
      return { ...state, content: action.payload.message };
    case TEST_ACTION:
      return { ...state, message: action.payload.message };
    case ERROR_RESPONSE:
      return { ...state, error: action.payload };
  }
  return state;
}



