import {
  GET_DATABASE_REQUEST,
  GET_DATABASE_FAILURE,
  GET_DATABASE_SUCCESS
} from '../constants/DatabaseTypes';

export const initialState = {
  loadingDatabaseResults: false,
  databaseResults: [],
  databaseResultsError: null
};

function DatabaseReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATABASE_REQUEST:
      return {
        ...state,
        loadingDatabaseResults: true,
        databaseResults: [],
        databaseResultsError: null
      };
    case GET_DATABASE_FAILURE:
      return {
        ...state,
        loadingDatabaseResults: false,
        databaseResultsError:
          (action.payload ? action.payload.message || action.payload.title : '') ||
          'An unknown error occured.'
      };
    case GET_DATABASE_SUCCESS:
      return {
        ...state,
        loadingDatabaseResults: false,
        databaseResults: action.payload
      };
    default:
      return state;
  }
}

export default DatabaseReducer;
