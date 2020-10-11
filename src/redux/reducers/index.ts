import { combineReducers } from 'redux';
import dataReducer from './data.reducer';
import statusReducer from './status.reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  status: statusReducer
})

export default rootReducer;