import { connect } from 'react-redux';
import Hello from './hello';

const mapStateToProps = ({ session: { currentUser } }) => ({
  signedOn: Boolean(currentUser)
});

export default connect(
  mapStateToProps
)(Hello);
