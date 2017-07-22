import { connect } from 'react-redux';
import MessageStreamWindow from './message_stream_window';
import { requestChannel } from '../../../actions/channel_actions';
import { receiveMessage } from '../../../actions/message_actions';

const mapStateToProps = ({ session: { currentUser }, cable }) => ({
  currentUser,
  cable
});

const mapDispatchToProps = (dispatch, { channelId }) => ({
  receiveMessage: message => dispatch(receiveMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageStreamWindow);
