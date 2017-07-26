import { connect } from 'react-redux';
import CreatePrivateChat from './create_private_chat';
import {
  queryUsers,
  clearUsersQueryResults
} from '../../../actions/query_actions';
import {
  receiveChatWindow,
  removeUtilityWindow,
  incrementZIndex
} from '../../../actions/window_actions';
import {
  createPrivateChannel,
  createPrivateChannelById
} from '../../../actions/channel_actions';
import { values } from 'lodash';

const mapStateToProps = ({ queryResults, windows: { lastZIndex } }) => ({
  userQueryResults: values(queryResults.users),
  zIndex: lastZIndex
});

const mapDispatchToProps = dispatch => ({
  queryUsers: nameQuery => dispatch(queryUsers(nameQuery)),
  incrementZIndex: () => dispatch(incrementZIndex()),
  addChatWindow: channelId => dispatch(receiveChatWindow(channelId)),
  createPrivateChannel: screennames => (
    dispatch(createPrivateChannel(screennames))
  ),
  createPrivateChannelById: ids => (
    dispatch(createPrivateChannelById(ids))
  ),
  closeWindow: () => dispatch(removeUtilityWindow('createPrivateChat'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePrivateChat);
