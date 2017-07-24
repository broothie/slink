import { connect } from 'react-redux';
import CreatePrivateChat from './create_private_chat';
import {
  removeUtilityWindow,
  incrementZIndex
} from '../../../actions/window_actions';
import { createPrivateChannel } from '../../../actions/channel_actions';

const mapStateToProps = ({ windows: { lastZIndex } }) => ({
  zIndex: lastZIndex
});

const mapDispatchToProps = dispatch => ({
  incrementZIndex: () => dispatch(incrementZIndex()),
  closeWindow: () => dispatch(removeUtilityWindow('createPrivateChat')),
  createPrivateChannel: screennames => (
    dispatch(createPrivateChannel(screennames))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePrivateChat);
