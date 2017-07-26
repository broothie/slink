import { connect } from 'react-redux';
import MessageItem from './message_item';
import { createPrivateChannelById } from '../../../actions/channel_actions';
import { receiveChatWindow } from '../../../actions/window_actions';

const mapStateToProps = ({ session: { currentUser } }) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  createPrivateChannelById: ids => (
    dispatch(createPrivateChannelById(ids))
  ),
  addChatWindow: channelId => dispatch(receiveChatWindow(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageItem);
