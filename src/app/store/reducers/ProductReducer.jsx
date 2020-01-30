import {
  ADD_PRODUCT,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  ADD_TEXT_BOX,
  ADD_RECTANGLE,
  UPDATE_RECTANGLE_POSITION,
  UPDATE_TEXTBOX_POSITION,
  UPDATE_RECTANGLE_SIZE,
  UPDATE_TEXTBOX_SIZE,
  SET_INSPECTOR,
  UPDATE_RECTANGLE,
  UPDATE_TEXTBOX
} from '../constants/ProductTypes';

export const initialState = {
  loadingProductResults: false,
  productResults: null,
  productResultsError: null,
  textBoxes: [],
  rectangles: [],
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
    case ADD_TEXT_BOX:
      return {
        ...state,
        textBoxes: [...state.textBoxes, action.payload],
        inspectorType: 'textBox',
        inspector: action.payload
      };
    case ADD_RECTANGLE:
      return {
        ...state,
        rectangles: [...state.rectangles, action.payload],
        inspectorType: 'rectangle',
        inspector: action.payload
      };
    case UPDATE_RECTANGLE_POSITION:
      return {
        ...state,
        rectangles: state.rectangles.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, x: action.payload.x, y: action.payload.y };
          }
          return item;
        })
      };
    case UPDATE_TEXTBOX_POSITION:
      return {
        ...state,
        textBoxes: state.textBoxes.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, x: action.payload.x, y: action.payload.y };
          }
          return item;
        })
      };
    case UPDATE_RECTANGLE_SIZE:
      return {
        ...state,
        rectangles: state.rectangles.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, width: action.payload.width, height: action.payload.height };
          }
          return item;
        })
      };
    case UPDATE_TEXTBOX_SIZE:
      return {
        ...state,
        textBoxes: state.textBoxes.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, width: action.payload.width, height: action.payload.height };
          }
          return item;
        })
      };
    case SET_INSPECTOR:
      return {
        ...state,
        inspectorType: action.payload.type,
        inspector: action.payload.object
      };
    case UPDATE_RECTANGLE:
      return {
        ...state,
        inspectorType: 'rectangle',
        inspector: action.payload,
        rectangles: state.rectangles.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      };
    case UPDATE_TEXTBOX:
      return {
        ...state,
        inspectorType: 'textBox',
        inspector: action.payload,
        rectangles: state.textBoxes.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      };
    default:
      return state;
  }
}

export default ProductReducer;
