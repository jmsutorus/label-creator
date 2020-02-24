import {
  GET_LABEL_REQUEST,
  GET_LABEL_FAILURE,
  GET_LABEL_SUCCESS,
  POST_LABEL_REQUEST,
  POST_LABEL_SUCCESS,
  POST_LABEL_FAILURE,
  DELETE_LABEL_REQUEST,
  DELETE_LABEL_SUCCESS,
  DELETE_LABEL_FAILURE
} from '../constants/LabelTypes';

export const initialState = {
  loadingLabelResults: false,
  labelResults: [],
  labelResultsError: null,
  loadingLabelDelete: false,
  labelDeleteError: null
};

const compare = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

function LabelReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LABEL_REQUEST:
      return {
        ...state,
        loadingLabelResults: true,
        labelResults: [],
        labelResultsError: null
      };
    case GET_LABEL_FAILURE:
      return {
        ...state,
        loadingLabelResults: false,
        labelResultsError:
          (action.payload ? action.payload.message || action.payload.title : '') ||
          'An unknown error occured.'
      };
    case GET_LABEL_SUCCESS:
      return {
        ...state,
        loadingLabelResults: false,
        labelResults: action.payload.sort(compare)
      };
    case POST_LABEL_REQUEST:
      return {
        ...state,
        loadingLabelResults: true,
        labelResultsError: null
      };
    case POST_LABEL_FAILURE:
      return {
        ...state,
        loadingLabelResults: false,
        labelResultsError:
          (action.payload ? action.payload.message || action.payload.title : '') ||
          'An unknown error occured.'
      };
    case POST_LABEL_SUCCESS:
      return {
        ...state,
        loadingLabelResults: false,
        labelResults: [
          ...state.labelResults.filter(x => x.id !== action.payload.id),
          action.payload
        ].sort(compare)
      };
    case DELETE_LABEL_REQUEST:
      return {
        ...state,
        loadingLabelDelete: true,
        labelResults: [],
        labelDeleteError: null
      };
    case DELETE_LABEL_FAILURE:
      return {
        ...state,
        loadingLabelDelete: false,
        labelDeleteError:
          (action.payload ? action.payload.message || action.payload.title : '') ||
          'An unknown error occured.'
      };
    case DELETE_LABEL_SUCCESS:
      return {
        ...state,
        loadingLabelDelete: false,
        labelResults: action.payload.sort(compare)
      };
    default:
      return state;
  }
}

export default LabelReducer;
