import { List, Map } from 'immutable';
import update from 'react-addons-update';

import { SUBMIT_TICKET, ERROR_RESPONSE, GET_MOVIE, DELETE_MOVIE } from '../actions/types';

const INTIAL_STATE = { message: null, error: null, movies: [], mode: false };

export default function (state = INTIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_TICKET:
      return { ...state, message: action.payload.message };
    case ERROR_RESPONSE:
      return { ...state, error: action.payload };
    case GET_MOVIE:
      return { ...state, movies: [...action.payload] };
    case DELETE_MOVIE:
      return { ...state, message: action.payload.message };
  }
  return state;
}
