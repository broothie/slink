import { connect } from 'react-redux';
import CreateChannel from './create_channel';
import { removeUtilityWindow } from '../../../actions/window_actions';
import { createChannel } from '../../../actions/channel_actions';
import { clearErrors } from '../../../actions/errors_actions';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createChannel: channelName => dispatch(createChannel(channelName)),
  closeWindow: () => dispatch(removeUtilityWindow('createChannel')),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChannel);
