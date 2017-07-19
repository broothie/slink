import { connect } from 'react-redux';
import MessageStreamWindow from './message_stream_window';
import { allMessages } from '../../reducers/selectors';

const mapStateToProps = state => ({
  messages: allMessages(state)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageStreamWindow);
