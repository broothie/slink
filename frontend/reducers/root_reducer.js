import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import messagesReducer from './messages_reducer';
import channelsReducer from './channels_reducer';

export default combineReducers({
  session: sessionReducer,
  messages: messagesReducer,
  channels: channelsReducer,
  errors: errorsReducer
});
