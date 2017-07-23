import { connect } from 'react-redux';
import ChatWindow from './chat_window';
import { createMessage } from '../../../actions/message_actions';
import { removeChatWindow } from '../../../actions/window_actions';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = (dispatch, { channel: { id } }) => ({
  sendMessage: body => dispatch(createMessage(id, {
    body,
    timestamp: new Date()
  })),
  closeWindow: () => dispatch(removeChatWindow(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);
