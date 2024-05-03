// reducers.js
import { FETCH_JOBS_SUCCESS, SET_FILTERS } from './actionTypes';

const initialState = {
  jobs: [],
  filters: {
    location: '',
    experience: '',
    salary: '',
    role: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: [...state.jobs, ...action.payload],
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
