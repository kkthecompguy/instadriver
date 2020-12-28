import { combineReducers } from 'redux';
import videos from './videos';
import markers from './markers';

export default combineReducers({
  videos,
  markers,
});
