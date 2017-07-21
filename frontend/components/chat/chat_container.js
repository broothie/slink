import { connect } from 'react-redux';
import Chat from './chat';
import { signOff } from '../../actions/session_actions';
import { requestUserChannels } from '../../actions/channel_actions';
import { values } from 'lodash';

const mapStateToProps = ({ session: { currentUser }, channels, windows }) => ({
  channels: values(channels).filter(channel => windows.includes(channel.id)),
  signedOn: Boolean(currentUser)
});

const mapDispatchToProps = dispatch => ({
  requestUserChannels: () => dispatch(requestUserChannels()),
  signOff: () => dispatch(signOff())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
