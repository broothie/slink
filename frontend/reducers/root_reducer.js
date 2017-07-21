import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import channelsReducer from './channels_reducer';
import cableReducer from './cable_reducer';
import windowsReducer from './windows_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers({
  session: sessionReducer,
  channels: channelsReducer,
  cable: cableReducer,
  windows: windowsReducer,
  errors: errorsReducer
});
