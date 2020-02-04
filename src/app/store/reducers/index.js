import { combineReducers } from 'redux';
import RootReducer from './TodoReducer';
import LabelReducer from './LabelReducer';
import CanvasReducer from './CanvasReducer';

const reducers = combineReducers({
  RootReducer,
  LabelReducer,
  CanvasReducer
});

export default reducers;
