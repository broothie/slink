import { connect } from 'react-redux';
import MessageStreamWindow from './message_stream_window';
import {
  requestChannelMessages,
  receiveMessage
} from '../../../actions/message_actions';

const mapStateToProps = ({ session: { currentUser } }) => ({
  currentUser
});

const mapDispatchToProps = (dispatch, { channel: { id } }) => ({
  requestChannelMessages: () => dispatch(requestChannelMessages(id)),
  receiveMessage: message => dispatch(receiveMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageStreamWindow);
