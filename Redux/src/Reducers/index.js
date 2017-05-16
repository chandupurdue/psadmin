import {combineReducers} from 'redux';
import courses from './courseReducers';


const rootReducer = combinereducers({
	courses
});

export default rootReducer;