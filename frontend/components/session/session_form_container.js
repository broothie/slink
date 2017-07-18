import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp, signIn } from '../../actions/session_actions';

const mapStateToProps = ({ session: { currentUser, errors } }, ownProps) => ({
  signedIn: Boolean(currentUser),
  errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, { location: { pathname } }) => ({
  processForm: user => (
    dispatch((pathname === '/signup' ? signUp : signIn)(user))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
