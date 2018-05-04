import { combineReducers } from 'redux';

// Reducers
import appReducer from './modules/app/reducer';

// Combine Reducers
const rootReducer  = combineReducers({
    appReducer: appReducer,
    home: appReducer,
    list:appReducer
});

export default rootReducer ;