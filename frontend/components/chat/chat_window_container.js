import { connect } from 'react-redux';
import ChatWindow from './chat_window';
import { createMessage } from '../../actions/message_actions';
import { merge } from 'lodash';

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: body => dispatch(createMessage(ownProps.channelId, {
    body,
    timestamp: new Date()
  }))
});

export default connect(
  null,
  mapDispatchToProps
)(ChatWindow);
