import { combineReducers } from 'redux';
import { organizationReducer } from '../reducer/organizationReducer.js';
export default combineReducers({
	ORGANIZATIONS:organizationReducer
	// rovider_Reducer,
	// ppointmentReducer,
	// etting_Reducer,
	// rofile_Reducer,
});
