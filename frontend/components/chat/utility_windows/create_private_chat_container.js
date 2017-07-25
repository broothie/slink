import { connect } from 'react-redux';
import CreatePrivateChat from './create_private_chat';
import {
  queryUsers,
  clearUsersQueryList
} from '../../../actions/query_actions';
import {
  removeUtilityWindow,
  incrementZIndex
} from '../../../actions/window_actions';
import { createPrivateChannel } from '../../../actions/channel_actions';
import { values } from 'lodash';

const mapStateToProps = ({ queries, windows: { lastZIndex } }) => ({
  userQueries: values(queries.users),
  zIndex: lastZIndex
});

const mapDispatchToProps = dispatch => ({
  queryUsers: nameQuery => dispatch(queryUsers(nameQuery)),
  incrementZIndex: () => dispatch(incrementZIndex()),
  createPrivateChannel: screennames => (
    dispatch(createPrivateChannel(screennames))
  ),
  closeWindow: () => dispatch(removeUtilityWindow('createPrivateChat'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePrivateChat);
