import { connect } from 'react-redux';
import AddChannel from './add_channel';
import { subscribeToChannel } from '../../../actions/channel_actions';
import {
  queryChannels,
  clearChannelsQueryList
} from '../../../actions/query_actions';
import {
  removeUtilityWindow,
  incrementZIndex
} from '../../../actions/window_actions';
import { values } from 'lodash';

const mapStateToProps = ({ querys, windows: { lastZIndex } }) => ({
  channelQuerys: values(querys.channels),
  zIndex: lastZIndex
});

const mapDispatchToProps = dispatch => ({
  queryChannels: nameQuery => dispatch(queryChannels(nameQuery)),
  addChannel: channelId => dispatch(subscribeToChannel(channelId)),
  clearChannelsList: () => dispatch(clearChannelsQueryList()),
  incrementZIndex: () => dispatch(incrementZIndex()),
  closeWindow: () => dispatch(removeUtilityWindow('addChannel'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddChannel);
