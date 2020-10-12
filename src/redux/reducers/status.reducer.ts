import { SET_LOADING, SET_ERROR, SET_SORT } from '../constants/actionTypes';
import { StatusState } from '../../interfaces'

const INITIAL_STATE: StatusState = {
  loading: true,
  error: false,
  sortBy: ''
};

const reducer = (state = INITIAL_STATE, action: any): StatusState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state, loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state, error: action.payload,
      };

    /**
     *  Takes a string and sets the current sorting method.
     */
    case SET_SORT:
      return { ...state, sortBy: action.payload }
    default: return state;
  }
};

export default reducer;