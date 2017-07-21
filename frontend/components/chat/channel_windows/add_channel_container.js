import { connect } from 'react-redux';
import AddChannel from './add_channel';
import {
  queryChannels,
  requestChannel
} from '../../../actions/channel_actions';
import { values } from 'lodash';

const mapStateToProps = ({ channelQuerys }) => ({
  channelQuerys: values(channelQuerys)
});

const mapDispatchToProps = dispatch => ({
  queryChannels: nameQuery => dispatch(queryChannels(nameQuery)),
  addChannel: channelId => dispatch(requestChannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddChannel);
