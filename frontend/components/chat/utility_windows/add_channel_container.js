import { connect } from 'react-redux';
import AddChannel from './add_channel';
import {
  queryChannels,
  subscribeToChannel,
  clearChannelsQueryList
} from '../../../actions/channel_actions';
import { values } from 'lodash';

const mapStateToProps = ({ channelQuerys }) => ({
  channelQuerys: values(channelQuerys)
});

const mapDispatchToProps = dispatch => ({
  queryChannels: nameQuery => dispatch(queryChannels(nameQuery)),
  addChannel: channelId => dispatch(subscribeToChannel(channelId)),
  clearChannelsList: () => dispatch(clearChannelsQueryList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddChannel);
