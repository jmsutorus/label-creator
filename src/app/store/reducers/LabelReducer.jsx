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
  labelResults: null,
  labelResultsError: null,
  loadingLabelDelete: false,
  labelDeleteError: null
};

function LabelReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LABEL_REQUEST:
      return {
        ...state,
        loadingLabelResults: true,
        labelResults: null,
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
        loadinglabelResults: false,
        labelResults: action.payload
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
        loadinglabelResults: false,
        viewLabel: action.payload,
        labelResults: [...state.labelResults, action.payload]
      };

    case DELETE_LABEL_REQUEST:
      return {
        ...state,
        loadingLabelDelete: true,
        labelResults: null,
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
        labelResults: action.payload
      };
    default:
      return state;
  }
}

export default LabelReducer;
