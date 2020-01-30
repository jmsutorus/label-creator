import { CALL_API } from '../../middleware/api';
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
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

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(100000));
}

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product
  };
}

export function removeProduct(index) {
  return {
    type: REMOVE_PRODUCT,
    index
  };
}

export function getProducts() {
  return {
    [CALL_API]: {
      method: 'GET',
      endpoint: 'http://172.19.26.124:8089/labelPOC/product/all',
      types: [GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE],
      data: {}
    }
  };
}

export function addTextBox() {
  return {
    type: ADD_TEXT_BOX,
    payload: {
      id: getRandomInt(),
      name: 'Text Box',
      x: 0,
      y: 0,
      width: 250,
      height: 250,
      fontSize: 12,
      fontType: ''
    }
  };
}

export function addRectangle() {
  return {
    type: ADD_RECTANGLE,
    payload: { id: getRandomInt(), name: 'Rectangle', x: 0, y: 0, width: 250, height: 250 }
  };
}

export function updateRectanglePosition(id, x, y) {
  return {
    type: UPDATE_RECTANGLE_POSITION,
    payload: { id, x, y }
  };
}

export function updateTextboxPosition(id, x, y) {
  return {
    type: UPDATE_TEXTBOX_POSITION,
    payload: { id, x, y }
  };
}

export function updateRectangleSize(id, width, height) {
  return {
    type: UPDATE_RECTANGLE_SIZE,
    payload: { id, width, height }
  };
}

export function updateTextboxSize(id, width, height) {
  return {
    type: UPDATE_TEXTBOX_SIZE,
    payload: { id, width, height }
  };
}

export function setInspector(type, object) {
  return {
    type: SET_INSPECTOR,
    payload: { type, object }
  };
}

export function updateRectangle(rectangle) {
  return {
    type: UPDATE_RECTANGLE,
    payload: rectangle
  };
}

export function updateTextbox(textbox) {
  return {
    type: UPDATE_TEXTBOX,
    payload: textbox
  };
}

export default {
  addProduct,
  removeProduct,
  getProducts,
  addTextBox,
  addRectangle,
  updateRectanglePosition,
  updateTextboxPosition,
  updateRectangleSize,
  updateTextboxSize,
  setInspector,
  updateRectangle,
  updateTextbox
};
