import { connect } from 'react-redux';
import BuddyList from './buddy_list';
import { signOff } from '../../../actions/session_actions';
import { receiveUtilityWindow } from '../../../actions/window_actions';

const mapDispatchToProps = dispatch => ({
  openWindow: windowName => dispatch(receiveUtilityWindow(windowName)),
  signOff: () => dispatch(signOff())
});

export default connect(
  null,
  mapDispatchToProps
)(BuddyList);
