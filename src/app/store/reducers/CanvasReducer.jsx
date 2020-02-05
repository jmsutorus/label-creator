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
import { DELETE_LABEL_SUCCESS, POST_LABEL_SUCCESS } from '../constants/LabelTypes';

export const initialState = {
  inspectorType: null,
  inspector: {},
  canvas: {
    name: 'My New Label',
    description: 'Hello There',
    upc: 'General Kenobi',
    quantity: 0,
    price: 0.0,
    textboxes: [],
    rectangles: [],
    barcodes: [],
    width: 600,
    height: 400
  }
};

function CanvasReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INSPECTOR:
      return {
        ...state,
        inspectorType: action.payload.type,
        inspector: action.payload.object
      };
    case UPDATE_CANVAS:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          name: action.payload.name,
          description: action.payload.description,
          width: action.payload.width,
          height: action.payload.height
        }
      };
    case DELETE_RECTANGLE:
      return {
        ...state,
        inspector: {},
        inspectorType: null,
        canvas: {
          ...state.canvas,
          rectangles: state.canvas.rectangles.filter(item => {
            if (item.id === action.payload.id) {
              return false;
            }
            return true;
          })
        }
      };
    case DELETE_TEXTBOX:
      return {
        ...state,
        inspector: {},
        inspectorType: null,
        canvas: {
          ...state.canvas,
          textboxes: state.canvas.textboxes.filter(item => {
            if (item.id === action.payload.id) {
              return false;
            }
            return true;
          })
        }
      };
    case DELETE_BARCODE:
      return {
        ...state,
        inspector: {},
        inspectorType: null,
        canvas: {
          ...state.canvas,
          barcodes: state.canvas.barcodes.filter(item => {
            if (item.id === action.payload.id) {
              return false;
            }
            return true;
          })
        }
      };

    case UPDATE_RECT_POSITION:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          rectangles: state.canvas.rectangles.map(item => {
            if (item.id === action.payload.id) {
              return { ...item, x: action.payload.x, y: action.payload.y };
            }
            return item;
          })
        }
      };
    case UPDATE_TB_POSITION:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          textboxes: state.canvas.textboxes.map(item => {
            if (item.id === action.payload.id) {
              return { ...item, x: action.payload.x, y: action.payload.y };
            }
            return item;
          })
        }
      };
    case UPDATE_BC_POSITION:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          barcodes: state.canvas.barcodes.map(item => {
            if (item.id === action.payload.id) {
              return { ...item, x: action.payload.x, y: action.payload.y };
            }
            return item;
          })
        }
      };
    case UPDATE_RECT_SIZE:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          rectangles: state.canvas.rectangles.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                width: action.payload.width,
                height: action.payload.height
              };
            }
            return item;
          })
        }
      };
    case UPDATE_TB_SIZE:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          textboxes: state.canvas.textboxes.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                width: action.payload.width,
                height: action.payload.height,
                fontSize: action.payload.height - action.payload.height * 0.31
              };
            }
            return item;
          })
        }
      };
    case UPDATE_BC_SIZE:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          barcodes: state.canvas.barcodes.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                width: action.payload.width,
                height: action.payload.height
              };
            }
            return item;
          })
        }
      };
    case ADD_RECTANGLE: {
      const rectangleID =
        state.canvas.rectangles.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      return {
        ...state,
        canvas: {
          ...state.canvas,
          rectangles: [
            ...state.canvas.rectangles,
            {
              ...action.payload,
              id: rectangleID
            }
          ]
        },
        inspectorType: 'rectangle',
        inspector: {
          ...action.payload,
          id: rectangleID
        }
      };
    }
    case ADD_TEXTBOX: {
      const textboxID =
        state.canvas.textboxes.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      return {
        ...state,
        canvas: {
          ...state.canvas,
          textboxes: [
            ...state.canvas.textboxes,
            {
              ...action.payload,
              id: textboxID
            }
          ]
        },
        inspectorType: 'textbox',
        inspector: {
          ...action.payload,
          id: textboxID
        }
      };
    }
    case ADD_BARCODE: {
      const barcodeID =
        state.canvas.barcodes.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      return {
        ...state,
        canvas: {
          ...state.canvas,
          barcodes: [
            ...state.canvas.barcodes,
            {
              ...action.payload,
              id: barcodeID
            }
          ]
        },
        inspectorType: 'barcode',
        inspector: {
          ...action.payload,
          id: barcodeID
        }
      };
    }
    case UPDATE_RECT:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          rectangles: state.canvas.rectangles.map(item => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          })
        },
        inspectorType: 'rectangle',
        inspector: action.payload
      };
    case UPDATE_BC:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          barcodes: state.canvas.barcodes.map(item => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          })
        },
        inspectorType: 'barcode',
        inspector: action.payload
      };
    case UPDATE_TB:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          textboxes: state.canvas.textboxes.map(item => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          })
        },
        inspectorType: 'textbox',
        inspector: action.payload
      };
    case SET_VIEW_LABEL:
      return {
        ...state,
        canvas: action.payload,
        inspectorType: null,
        inspector: {}
      };
    case DELETE_LABEL_SUCCESS:
      return {
        ...state,
        inspectorType: null,
        inspector: {},
        canvas: {
          name: 'My New Label',
          description: 'Hello There',
          upc: 'General Kenobi',
          quantity: 0,
          price: 0.0,
          textboxes: [],
          rectangles: [],
          barcodes: [],
          width: 600,
          height: 400
        }
      };
    case POST_LABEL_SUCCESS:
      return {
        ...state,
        inspectorType: null,
        inspector: {},
        canvas: action.payload
      };
    default:
      return state;
  }
}

export default CanvasReducer;
