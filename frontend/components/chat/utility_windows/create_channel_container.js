import { connect } from 'react-redux';
import CreateChannel from './create_channel';
import {
  receiveChatWindow,
  removeUtilityWindow,
  incrementZIndex
} from '../../../actions/window_actions';
import { createChannel } from '../../../actions/channel_actions';
import { clearErrors } from '../../../actions/errors_actions';

const mapStateToProps = ({ windows: { lastZIndex },  errors }) => ({
  zIndex: lastZIndex,
  errors
});

const mapDispatchToProps = dispatch => ({
  createChannel: channelName => dispatch(createChannel(channelName)),
  addChatWindow: channelId => dispatch(receiveChatWindow(channelId)),
  closeWindow: () => dispatch(removeUtilityWindow('createChannel')),
  incrementZIndex: () => dispatch(incrementZIndex()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChannel);
