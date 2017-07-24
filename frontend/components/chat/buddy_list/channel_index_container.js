import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { receiveChatWindow } from '../../../actions/window_actions';
import { requestUserChannels } from '../../../actions/channel_actions';
import {
  getChannelInfos,
  getDmInfos
 } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  channelInfos: getChannelInfos(state),
  dmInfos: getDmInfos(state)
});

const mapDispatchToProps = dispatch => ({
  requestUserChannels: () => dispatch(requestUserChannels()),
  addWindow: channelId => dispatch(receiveChatWindow(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
