import { combineReducers } from 'redux';
import RootReducer from './TodoReducer';
import LabelReducer from './LabelReducer';
import CanvasReducer from './CanvasReducer';
import DatabaseReducer from './DatabaseReducer';

const reducers = combineReducers({
  RootReducer,
  LabelReducer,
  CanvasReducer,
  DatabaseReducer
});

export default reducers;
