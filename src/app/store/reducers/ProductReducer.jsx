import {
  ADD_PRODUCT,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  SET_INSPECTOR,
  UPDATE_OBJECT,
  UPDATE_SIZE,
  UPDATE_POSITION,
  ADD_OBJECT
} from '../constants/ProductTypes';

export const initialState = {
  loadingProductResults: false,
  productResults: null,
  productResultsError: null,
  textBoxes: [],
  rectangles: [],
  objects: [],
  inspectorType: null,
  inspector: {}
};

function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productResults: action.product,
        productResultsError: null
      };
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loadingProductResults: true,
        productResults: null,
        productResultsError: null
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loadingProductResults: false,
        productResultsError:
          (action.payload ? action.payload.message || action.payload.title : '') ||
          'An unknown error occured.'
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loadingProductResults: false,
        productResults: action.payload
      };
    case ADD_OBJECT:
      return {
        ...state,
        objects: [
          ...state.objects,
          {
            ...action.payload,
            id: state.objects.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
          }
        ],
        inspectorType: action.payload.type,
        inspector: action.payload
      };
    case SET_INSPECTOR:
      return {
        ...state,
        inspectorType: action.payload.type,
        inspector: action.payload
      };
    case UPDATE_OBJECT:
      return {
        ...state,
        inspectorType: action.payload.type,
        inspector: action.payload,
        objects: state.objects.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      };
    case UPDATE_POSITION:
      return {
        ...state,
        objects: state.objects.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, x: action.payload.x, y: action.payload.y };
          }
          return item;
        })
      };
    case UPDATE_SIZE:
      return {
        ...state,
        objects: state.objects.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, width: action.payload.width, height: action.payload.height };
          }
          return item;
        })
      };
    default:
      return state;
  }
}

export default ProductReducer;
