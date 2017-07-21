import { connect } from 'react-redux';
import ChatWindow from './chat_window';
import { createMessage } from '../../../actions/message_actions';

const mapDispatchToProps = (dispatch, { channel: { id } }) => ({
  sendMessage: body => dispatch(createMessage(id, {
    body,
    timestamp: new Date()
  }))
});

export default connect(
  null,
  mapDispatchToProps
)(ChatWindow);
