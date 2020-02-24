import {
  SET_INSPECTOR,
  UPDATE_CANVAS,
  UPDATE_RECT_SIZE,
  UPDATE_TB_SIZE,
  UPDATE_BC_SIZE,
  UPDATE_RECT_POSITION,
  UPDATE_TB_POSITION,
  UPDATE_BC_POSITION,
  ADD_RECTANGLE,
  ADD_BARCODE,
  ADD_TEXTBOX,
  UPDATE_RECT,
  UPDATE_TB,
  UPDATE_BC,
  SET_VIEW_LABEL,
  DELETE_RECTANGLE,
  DELETE_TEXTBOX,
  DELETE_BARCODE
} from '../constants/CanvasTypes';

export function addTextBox() {
  return {
    type: ADD_TEXTBOX,
    payload: {
      id: 0,
      name: 'Text Box',
      x: 1,
      y: 1,
      width: 1,
      height: 0.5,
      fontSize: 20,
      fontType: '',
      rotate: 0,
      field: ''
    }
  };
}

export function addRectangle() {
  return {
    type: ADD_RECTANGLE,
    payload: {
      id: 0,
      name: 'Rectangle',
      x: 1,
      y: 1,
      width: 1,
      height: 1,
      rotate: 0
    }
  };
}

export function addBarcode() {
  return {
    type: ADD_BARCODE,
    payload: {
      id: 0,
      name: 'Barcode',
      x: 1,
      y: 1,
      width: 1.5,
      height: 1,
      rotate: 0,
      field: ''
    }
  };
}

export function setInspector(object, type) {
  return {
    type: SET_INSPECTOR,
    payload: { object, type }
  };
}

export function updateCanvas(canvas) {
  return {
    type: UPDATE_CANVAS,
    payload: canvas
  };
}

export function deleteRectangle(rectangle) {
  return {
    type: DELETE_RECTANGLE,
    payload: rectangle
  };
}

export function deleteTextbox(textbox) {
  return {
    type: DELETE_TEXTBOX,
    payload: textbox
  };
}

export function deleteBarcode(barcode) {
  return {
    type: DELETE_BARCODE,
    payload: barcode
  };
}

export function updateRectanglePosition(id, x, y) {
  return {
    type: UPDATE_RECT_POSITION,
    payload: { id, x, y }
  };
}

export function updateTextboxPosition(id, x, y) {
  return {
    type: UPDATE_TB_POSITION,
    payload: { id, x, y }
  };
}

export function updateBarcodePosition(id, x, y) {
  return {
    type: UPDATE_BC_POSITION,
    payload: { id, x, y }
  };
}

export function updateRectangleSize(id, width, height) {
  return {
    type: UPDATE_RECT_SIZE,
    payload: { id, width, height }
  };
}

export function updateTextboxSize(id, width, height) {
  return {
    type: UPDATE_TB_SIZE,
    payload: { id, width, height }
  };
}

export function updateBarcodeSize(id, width, height) {
  return {
    type: UPDATE_BC_SIZE,
    payload: { id, width, height }
  };
}

export function updateRectangle(rectangle) {
  return {
    type: UPDATE_RECT,
    payload: rectangle
  };
}

export function updateTextbox(textbox) {
  return {
    type: UPDATE_TB,
    payload: textbox
  };
}

export function updateBarcode(barcode) {
  return {
    type: UPDATE_BC,
    payload: barcode
  };
}

export function setViewLabel(label) {
  return {
    type: SET_VIEW_LABEL,
    payload: label
  };
}

export function newViewLabel() {
  return {
    type: SET_VIEW_LABEL,
    payload: {
      name: 'My New Label',
      description: 'Hello There',
      upc: 'General Kenobi',
      quantity: 0,
      price: 0.0,
      textboxes: [],
      rectangles: [],
      barcodes: [],
      width: 5,
      height: 3
    }
  };
}

export default {
  addTextBox,
  addRectangle,
  setInspector,
  addBarcode,
  updateCanvas,
  setViewLabel,
  newViewLabel
};
