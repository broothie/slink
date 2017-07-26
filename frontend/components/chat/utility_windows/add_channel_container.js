import { connect } from 'react-redux';
import AddChannel from './add_channel';
import { subscribeToChannel } from '../../../actions/channel_actions';
import {
  queryChannels,
  clearChannelsQueryResults
} from '../../../actions/query_actions';
import {
  receiveChatWindow,
  removeUtilityWindow,
  incrementZIndex
} from '../../../actions/window_actions';
import { values } from 'lodash';

const mapStateToProps = ({ queryResults, windows: { lastZIndex } }) => ({
  channelQueryResults: values(queryResults.channels),
  zIndex: lastZIndex
});

const mapDispatchToProps = dispatch => ({
  queryChannels: nameQuery => dispatch(queryChannels(nameQuery)),
  addChannel: channelId => dispatch(subscribeToChannel(channelId)),
  addChatWindow: channelId => dispatch(receiveChatWindow(channelId)),
  clearChannelsList: () => dispatch(clearChannelsQueryResults()),
  incrementZIndex: () => dispatch(incrementZIndex()),
  closeWindow: () => dispatch(removeUtilityWindow('addChannel'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddChannel);
