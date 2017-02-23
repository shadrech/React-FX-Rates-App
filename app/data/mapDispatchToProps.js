import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default mapDispatchToProps;