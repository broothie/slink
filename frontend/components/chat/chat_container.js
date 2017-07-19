import { connect } from 'react-redux';
import Chat from './chat';
import { signOff } from '../../actions/session_actions';

const mapStateToProps = ({ session: { currentUser } }) => ({
  signedOn: Boolean(currentUser)
});

const mapDispatchToProps = dispatch => ({
  signOff: () => dispatch(signOff())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
