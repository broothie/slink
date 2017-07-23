import { connect } from 'react-redux';
import ChatWindow from './chat_window';
import { createMessage } from '../../../actions/message_actions';
import {
  removeChatWindow,
  incrementZIndex
} from '../../../actions/window_actions';
import { clearErrors } from '../../../actions/errors_actions';

const mapStateToProps = ({ windows: { lastZIndex }, errors }) => ({
  zIndex: lastZIndex,
  errors
});

const mapDispatchToProps = (dispatch, { channel: { id } }) => ({
  sendMessage: body => dispatch(createMessage(id, {
    body,
    timestamp: new Date()
  })),
  closeWindow: () => dispatch(removeChatWindow(id)),
  incrementZIndex: () => dispatch(incrementZIndex()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);
