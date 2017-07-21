import { connect } from 'react-redux';
import Chat from './chat';
import { createCable } from '../../actions/channel_actions';

const mapStateToProps = ({ session: { currentUser } }) => ({
  signedOn: Boolean(currentUser)
});

const mapDispatchToProps = dispatch => ({
  createCable: () => dispatch(createCable())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
