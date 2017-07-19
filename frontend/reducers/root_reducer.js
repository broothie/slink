import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import messagesReducer from './messages_reducer';

export default combineReducers({
  session: sessionReducer,
  messages: messagesReducer,
  errors: errorsReducer
});
