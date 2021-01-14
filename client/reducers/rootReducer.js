import {combineReducers} from 'redux';
import programReducer from './programReducer';

const rootReducer = combineReducers({
    programs : programReducer
});

export default rootReducer;