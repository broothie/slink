import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp, signOn } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = ({ session: { currentUser }, errors }, ownProps) => ({
  signedOn: Boolean(currentUser),
  errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, { location: { pathname } }) => ({
  processForm: user => (
    dispatch((pathname === '/signup' ? signUp : signOn)(user))
  ),
  clearErrors: () => dispatch(clearErrors()),
  demoSignOn: () => dispatch(signOn({
    screenname: 'demoUser',
    password: '123456'
  }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
