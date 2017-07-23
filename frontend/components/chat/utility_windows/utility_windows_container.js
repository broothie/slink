import { connect } from 'react-redux';
import UtilityWindows from './utility_windows';

const mapStateToProps = ({ windows: { utilityWindows } }) => ({
  utilityWindows: utilityWindows
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UtilityWindows);
