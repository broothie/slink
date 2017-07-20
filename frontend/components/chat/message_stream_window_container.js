import { connect } from 'react-redux';
import MessageStreamWindow from './message_stream_window';
import { channelMessages } from '../../reducers/selectors';
import { requestChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, { channelId }) => ({
  messages: channelMessages(state, channelId)
});

const mapDispatchToProps = (dispatch, { channelId }) => ({
  requestChannel: () => dispatch(requestChannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageStreamWindow);
