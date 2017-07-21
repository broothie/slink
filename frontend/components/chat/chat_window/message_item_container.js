import { connect } from 'react-redux';
import MessageItem from './message_item';

const mapStateToProps = ({ session : { currentUser } }) => ({
  currentUser
});

export default connect(
  mapStateToProps
)(MessageItem);
