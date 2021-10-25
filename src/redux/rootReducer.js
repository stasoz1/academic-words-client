import { combineReducers } from 'redux';
import translationReducer from './translation/translationReducer'

const rootReducer = combineReducers({
    translation: translationReducer,
});

export default rootReducer;