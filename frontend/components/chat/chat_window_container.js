import { connect } from 'react-redux';
import ChatWindow from './chat_window';
import { createMessage } from '../../actions/message_actions';
import { merge } from 'lodash';

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: body => dispatch(createMessage({
    body,
    channel_id: ownProps.channelId,
    timestamp: new Date()
  }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);
