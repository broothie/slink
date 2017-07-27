import { connect } from 'react-redux';
import BuddyList from './buddy_list';
import { signOff } from '../../../actions/session_actions';
import { requestChannel } from '../../../actions/channel_actions';
import {
  receiveChatWindow,
  receiveUtilityWindow,
  incrementZIndex,
  clearWindows
} from '../../../actions/window_actions';

const mapStateToProps = ({ session: { currentUser }, channels, windows: { lastZIndex, chatWindows } }) => ({
  currentUser,
  chatWindows,
  zIndex: lastZIndex
});

const mapDispatchToProps = dispatch => ({
  addChatWindow: channelId => dispatch(receiveChatWindow(channelId)),
  requestChannel: channelId => dispatch(requestChannel(channelId)),
  openWindow: windowName => dispatch(receiveUtilityWindow(windowName)),
  incrementZIndex: () => dispatch(incrementZIndex()),
  signOff: () => dispatch(signOff()),
  clearWindows: () => dispatch(clearWindows())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuddyList);
