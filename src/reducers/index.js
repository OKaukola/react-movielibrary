import { List, Map } from 'immutable';
import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
import movReducer from './mov_reducer';

import { reducer as formReducer } from 'redux-form';

 const rootReducer = combineReducers({
   form: formReducer,
   auth: authReducer,
   user: userReducer,
   mov: movReducer,
 });

 export default rootReducer;