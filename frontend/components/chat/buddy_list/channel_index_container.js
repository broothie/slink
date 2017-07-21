import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { receiveChatWindow } from '../../../actions/window_actions';
import { requestUserChannels } from '../../../actions/channel_actions';
import { getChannelInfos } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  channelInfos: getChannelInfos(state)
});

const mapDispatchToProps = dispatch => ({
  requestUserChannels: () => dispatch(requestUserChannels()),
  addWindow: channelId => dispatch(receiveChatWindow(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
