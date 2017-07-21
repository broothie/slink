import { connect } from 'react-redux';
import BuddyList from './buddy_list';
import { getChannelInfos } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  channelInfos: getChannelInfos(state)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuddyList);
