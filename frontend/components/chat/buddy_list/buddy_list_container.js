import { connect } from 'react-redux';
import BuddyList from './buddy_list';
import { signOff } from '../../../actions/session_actions';
import {
  receiveUtilityWindow,
  incrementZIndex
} from '../../../actions/window_actions';

const mapStateToProps = ({ windows: { lastZIndex }}) => ({
  zIndex: lastZIndex
});

const mapDispatchToProps = dispatch => ({
  openWindow: windowName => dispatch(receiveUtilityWindow(windowName)),
  incrementZIndex: () => dispatch(incrementZIndex()),
  signOff: () => dispatch(signOff())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuddyList);
