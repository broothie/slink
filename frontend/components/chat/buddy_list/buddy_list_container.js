import { connect } from 'react-redux';
import BuddyList from './buddy_list';
import { signOff } from '../../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  signOff: () => dispatch(signOff())
});

export default connect(
  null,
  mapDispatchToProps
)(BuddyList);
