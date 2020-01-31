import { CALL_API } from '../../middleware/api';
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  SET_INSPECTOR,
  UPDATE_OBJECT,
  UPDATE_SIZE,
  UPDATE_POSITION,
  ADD_OBJECT
} from '../constants/ProductTypes';

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
    type: ADD_OBJECT,
    payload: {
      id: 0,
      type: 'textBox',
      name: 'Text Box',
      x: 0,
      y: 0,
      width: 196,
      height: 29,
      fontSize: 20,
      fontType: '',
      zIndex: 600
    }
  };
}

export function addRectangle() {
  return {
    type: ADD_OBJECT,
    payload: {
      id: 0,
      type: 'rectangle',
      name: 'Rectangle',
      x: 0,
      y: 0,
      width: 250,
      height: 250,
      fontSize: 20,
      fontType: '',
      zIndex: 400
    }
  };
}

export function addBarcode() {
  return {
    type: ADD_OBJECT,
    payload: {
      id: 0,
      type: 'barcode',
      name: 'Barcode',
      x: 0,
      y: 0,
      width: 250,
      height: 150,
      fontSize: 20,
      fontType: '',
      zIndex: 500
    }
  };
}

export function setInspector(object) {
  return {
    type: SET_INSPECTOR,
    payload: object
  };
}

export function updateObject(object) {
  return {
    type: UPDATE_OBJECT,
    payload: object
  };
}

export function updatePosition(id, x, y) {
  return {
    type: UPDATE_POSITION,
    payload: { id, x, y }
  };
}

export function updateSize(id, width, height) {
  return {
    type: UPDATE_SIZE,
    payload: { id, width, height }
  };
}

export default {
  addProduct,
  removeProduct,
  getProducts,
  addTextBox,
  addRectangle,
  setInspector,
  updateObject
};
