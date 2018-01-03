import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import resultsReducer from './resultsReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  results: resultsReducer
});

export default rootReducer;