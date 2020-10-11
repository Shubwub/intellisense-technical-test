import { SET_LOADING, SET_ERROR, SET_SORT } from '../constants/actionTypes';

const INITIAL_STATE = {
  loading: true,
  error: false,
  sortBy: ''
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state, loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state, error: action.payload,
      };
    case SET_SORT:
      return { ...state, sortBy: action.payload }
    default: return state;
  }
};

export default reducer;