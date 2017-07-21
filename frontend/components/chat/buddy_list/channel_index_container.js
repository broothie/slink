import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { receiveChatWindow } from '../../../actions/window_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  addWindow: channelId => dispatch(receiveChatWindow(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
