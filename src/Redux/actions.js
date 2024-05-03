// actions.js
import { FETCH_JOBS_SUCCESS, SET_FILTERS } from './actionTypes';

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});
