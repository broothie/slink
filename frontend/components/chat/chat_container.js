import { connect } from 'react-redux';
import Chat from './chat';
import { requestUserChannels } from '../../actions/channel_actions';

const mapStateToProps = ({ session: { currentUser }, channels, windows }) => ({
  signedOn: Boolean(currentUser)
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
