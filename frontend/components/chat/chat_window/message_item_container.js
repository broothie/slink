import { connect } from 'react-redux';
import MessageItem from './message_item';
import { createPrivateChannel } from '../../../actions/channel_actions';

const mapStateToProps = ({ session: { currentUser } }) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  createPrivateChannel: screennames => (
    dispatch(createPrivateChannel(screennames))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageItem);
