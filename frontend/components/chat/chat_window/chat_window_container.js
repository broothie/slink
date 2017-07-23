import { connect } from 'react-redux';
import ChatWindow from './chat_window';
import { createMessage } from '../../../actions/message_actions';
import { removeChatWindow } from '../../../actions/window_actions';
import { clearErrors } from '../../../actions/errors_actions';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = (dispatch, { channel: { id } }) => ({
  sendMessage: body => dispatch(createMessage(id, {
    body,
    timestamp: new Date()
  })),
  closeWindow: () => dispatch(removeChatWindow(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);
