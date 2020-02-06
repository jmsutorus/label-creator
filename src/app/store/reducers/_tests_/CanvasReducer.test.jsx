import CanvasReducer from '../CanvasReducer';
import * as types from '../../constants/CanvasTypes';
import { DELETE_LABEL_SUCCESS, POST_LABEL_SUCCESS } from '../../constants/LabelTypes';

describe('label reducer', () => {
  it('should return the initial state', () => {
    expect(CanvasReducer(undefined, {})).toEqual({
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
        width: 7,
        height: 5
      }
    });
  });
  it('should handle SET_INSPECTOR', () => {
    expect(
      CanvasReducer(undefined, {
        type: types.SET_INSPECTOR,
        payload: { object: { name: 'name' }, type: 'myType' }
      })
    ).toEqual({
      inspectorType: 'myType',
      inspector: { name: 'name' },
      canvas: {
        name: 'My New Label',
        description: 'Hello There',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [],
        rectangles: [],
        barcodes: [],
        width: 7,
        height: 5
      }
    });
  });
  it('should handle UPDATE_CANVAS', () => {
    expect(
      CanvasReducer(undefined, {
        type: types.UPDATE_CANVAS,
        payload: { name: 'name', description: 'description', width: 123, height: 456 }
      })
    ).toEqual({
      inspectorType: null,
      inspector: {},
      canvas: {
        name: 'name',
        description: 'description',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [],
        rectangles: [],
        barcodes: [],
        width: 123,
        height: 456
      }
    });
  });
  it('should handle DELETE_RECTANGLE', () => {
    expect(
      CanvasReducer(
        {
          inspectorType: null,
          inspector: {},
          canvas: {
            name: 'My New Label',
            description: 'Hello There',
            upc: 'General Kenobi',
            quantity: 0,
            price: 0.0,
            textboxes: [],
            rectangles: [{ id: 123 }],
            barcodes: [],
            width: 600,
            height: 400
          }
        },
        {
          type: types.DELETE_RECTANGLE,
          payload: { id: 123 }
        }
      )
    ).toEqual({
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
    });
  });
  it('should handle DELETE_TEXTBOX', () => {
    expect(
      CanvasReducer(
        {
          inspectorType: null,
          inspector: {},
          canvas: {
            name: 'My New Label',
            description: 'Hello There',
            upc: 'General Kenobi',
            quantity: 0,
            price: 0.0,
            textboxes: [{ id: 123 }],
            rectangles: [],
            barcodes: [],
            width: 600,
            height: 400
          }
        },
        {
          type: types.DELETE_TEXTBOX,
          payload: { id: 123 }
        }
      )
    ).toEqual({
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
    });
  });
  it('should handle DELETE_BARCODE', () => {
    expect(
      CanvasReducer(
        {
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
            barcodes: [{ id: 123 }],
            width: 600,
            height: 400
          }
        },
        {
          type: types.DELETE_BARCODE,
          payload: { id: 123 }
        }
      )
    ).toEqual({
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
    });
  });
  it('should handle UPDATE_RECT_POSITION', () => {
    expect(
      CanvasReducer(
        {
          inspectorType: null,
          inspector: {},
          canvas: {
            name: 'My New Label',
            description: 'Hello There',
            upc: 'General Kenobi',
            quantity: 0,
            price: 0.0,
            textboxes: [],
            rectangles: [{ id: 123, x: 1, y: 2 }],
            barcodes: [],
            width: 600,
            height: 400
          }
        },
        {
          type: types.UPDATE_RECT_POSITION,
          payload: { id: 123, x: 4, y: 5 }
        }
      )
    ).toEqual({
      inspectorType: null,
      inspector: {},
      canvas: {
        name: 'My New Label',
        description: 'Hello There',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [],
        rectangles: [{ id: 123, x: 4, y: 5 }],
        barcodes: [],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle UPDATE_TB_POSITION', () => {
    expect(
      CanvasReducer(
        {
          inspectorType: null,
          inspector: {},
          canvas: {
            name: 'My New Label',
            description: 'Hello There',
            upc: 'General Kenobi',
            quantity: 0,
            price: 0.0,
            textboxes: [{ id: 123, x: 1, y: 2 }],
            rectangles: [],
            barcodes: [],
            width: 600,
            height: 400
          }
        },
        {
          type: types.UPDATE_TB_POSITION,
          payload: { id: 123, x: 4, y: 5 }
        }
      )
    ).toEqual({
      inspectorType: null,
      inspector: {},
      canvas: {
        name: 'My New Label',
        description: 'Hello There',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [{ id: 123, x: 4, y: 5 }],
        rectangles: [],
        barcodes: [],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle UPDATE_BC_POSITION', () => {
    expect(
      CanvasReducer(
        {
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
            barcodes: [{ id: 123, x: 1, y: 2 }],
            width: 600,
            height: 400
          }
        },
        {
          type: types.UPDATE_BC_POSITION,
          payload: { id: 123, x: 4, y: 5 }
        }
      )
    ).toEqual({
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
        barcodes: [{ id: 123, x: 4, y: 5 }],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle UPDATE_RECT_SIZE', () => {
    expect(
      CanvasReducer(
        {
          inspectorType: null,
          inspector: {},
          canvas: {
            name: 'My New Label',
            description: 'Hello There',
            upc: 'General Kenobi',
            quantity: 0,
            price: 0.0,
            textboxes: [],
            rectangles: [{ id: 123, width: 1, height: 2 }],
            barcodes: [],
            width: 600,
            height: 400
          }
        },
        {
          type: types.UPDATE_RECT_SIZE,
          payload: { id: 123, width: 4, height: 5 }
        }
      )
    ).toEqual({
      inspectorType: null,
      inspector: {},
      canvas: {
        name: 'My New Label',
        description: 'Hello There',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [],
        rectangles: [{ id: 123, width: 4, height: 5 }],
        barcodes: [],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle UPDATE_TB_SIZE', () => {
    expect(
      CanvasReducer(
        {
          inspectorType: null,
          inspector: {},
          canvas: {
            name: 'My New Label',
            description: 'Hello There',
            upc: 'General Kenobi',
            quantity: 0,
            price: 0.0,
            textboxes: [{ id: 123, width: 1, height: 2, fontSize: 6 }],
            rectangles: [],
            barcodes: [],
            width: 600,
            height: 400
          }
        },
        {
          type: types.UPDATE_TB_SIZE,
          payload: { id: 123, width: 4, height: 5 }
        }
      )
    ).toEqual({
      inspectorType: null,
      inspector: {},
      canvas: {
        name: 'My New Label',
        description: 'Hello There',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [{ id: 123, width: 4, height: 5, fontSize: 6 }],
        rectangles: [],
        barcodes: [],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle UPDATE_BC_SIZE', () => {
    expect(
      CanvasReducer(
        {
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
            barcodes: [{ id: 123, width: 1, height: 2 }],
            width: 600,
            height: 400
          }
        },
        {
          type: types.UPDATE_BC_SIZE,
          payload: { id: 123, width: 4, height: 5 }
        }
      )
    ).toEqual({
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
        barcodes: [{ id: 123, width: 4, height: 5 }],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle ADD_RECTANGLE', () => {
    expect(
      CanvasReducer(
        {
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
        },
        {
          type: types.ADD_RECTANGLE,
          payload: { width: 4, height: 5, x: 1, y: 2 }
        }
      )
    ).toEqual({
      inspectorType: 'rectangle',
      inspector: { id: 0, width: 4, height: 5, x: 1, y: 2 },
      canvas: {
        name: 'My New Label',
        description: 'Hello There',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [],
        rectangles: [{ id: 0, width: 4, height: 5, x: 1, y: 2 }],
        barcodes: [],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle ADD_TEXTBOX', () => {
    expect(
      CanvasReducer(
        {
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
        },
        {
          type: types.ADD_TEXTBOX,
          payload: { width: 4, height: 5, x: 1, y: 2 }
        }
      )
    ).toEqual({
      inspectorType: 'textbox',
      inspector: { id: 0, width: 4, height: 5, x: 1, y: 2 },
      canvas: {
        name: 'My New Label',
        description: 'Hello There',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [{ id: 0, width: 4, height: 5, x: 1, y: 2 }],
        rectangles: [],
        barcodes: [],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle ADD_BARCODE', () => {
    expect(
      CanvasReducer(
        {
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
        },
        {
          type: types.ADD_BARCODE,
          payload: { width: 4, height: 5, x: 1, y: 2 }
        }
      )
    ).toEqual({
      inspectorType: 'barcode',
      inspector: { id: 0, width: 4, height: 5, x: 1, y: 2 },
      canvas: {
        name: 'My New Label',
        description: 'Hello There',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [],
        rectangles: [],
        barcodes: [{ id: 0, width: 4, height: 5, x: 1, y: 2 }],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle UPDATE_RECT', () => {
    expect(
      CanvasReducer(
        {
          inspectorType: null,
          inspector: {},
          canvas: {
            name: 'My New Label',
            description: 'Hello There',
            upc: 'General Kenobi',
            quantity: 0,
            price: 0.0,
            textboxes: [],
            rectangles: [{ id: 123, width: 40, height: 50, x: 10, y: 20 }],
            barcodes: [],
            width: 600,
            height: 400
          }
        },
        {
          type: types.UPDATE_RECT,
          payload: { id: 123, width: 4, height: 5, x: 1, y: 2 }
        }
      )
    ).toEqual({
      inspectorType: 'rectangle',
      inspector: { id: 123, width: 4, height: 5, x: 1, y: 2 },
      canvas: {
        name: 'My New Label',
        description: 'Hello There',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [],
        rectangles: [{ id: 123, width: 4, height: 5, x: 1, y: 2 }],
        barcodes: [],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle UPDATE_BC', () => {
    expect(
      CanvasReducer(
        {
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
            barcodes: [{ id: 123, width: 40, height: 50, x: 10, y: 20 }],
            width: 600,
            height: 400
          }
        },
        {
          type: types.UPDATE_BC,
          payload: { id: 123, width: 4, height: 5, x: 1, y: 2 }
        }
      )
    ).toEqual({
      inspectorType: 'barcode',
      inspector: { id: 123, width: 4, height: 5, x: 1, y: 2 },
      canvas: {
        name: 'My New Label',
        description: 'Hello There',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [],
        rectangles: [],
        barcodes: [{ id: 123, width: 4, height: 5, x: 1, y: 2 }],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle UPDATE_TB', () => {
    expect(
      CanvasReducer(
        {
          inspectorType: null,
          inspector: {},
          canvas: {
            name: 'My New Label',
            description: 'Hello There',
            upc: 'General Kenobi',
            quantity: 0,
            price: 0.0,
            textboxes: [{ id: 123, width: 40, height: 50, x: 10, y: 20 }],
            rectangles: [],
            barcodes: [],
            width: 600,
            height: 400
          }
        },
        {
          type: types.UPDATE_TB,
          payload: { id: 123, width: 4, height: 5, x: 1, y: 2 }
        }
      )
    ).toEqual({
      inspectorType: 'textbox',
      inspector: { id: 123, width: 4, height: 5, x: 1, y: 2 },
      canvas: {
        name: 'My New Label',
        description: 'Hello There',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [{ id: 123, width: 4, height: 5, x: 1, y: 2 }],
        rectangles: [],
        barcodes: [],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle SET_VIEW_LABEL', () => {
    expect(
      CanvasReducer(undefined, {
        type: types.SET_VIEW_LABEL,
        payload: {
          name: 'new label',
          description: 'Hello There',
          upc: 'General Kenobi',
          quantity: 0,
          price: 0.0,
          textboxes: [{ id: 123, width: 4, height: 5, x: 1, y: 2 }],
          rectangles: [{ id: 123, width: 4, height: 5, x: 1, y: 2 }],
          barcodes: [{ id: 123, width: 4, height: 5, x: 1, y: 2 }],
          width: 600,
          height: 400
        }
      })
    ).toEqual({
      inspectorType: null,
      inspector: {},
      canvas: {
        name: 'new label',
        description: 'Hello There',
        upc: 'General Kenobi',
        quantity: 0,
        price: 0.0,
        textboxes: [{ id: 123, width: 4, height: 5, x: 1, y: 2 }],
        rectangles: [{ id: 123, width: 4, height: 5, x: 1, y: 2 }],
        barcodes: [{ id: 123, width: 4, height: 5, x: 1, y: 2 }],
        width: 600,
        height: 400
      }
    });
  });
  it('should handle DELETE_LABEL_SUCCESS', () => {
    expect(
      CanvasReducer(undefined, {
        type: DELETE_LABEL_SUCCESS,
        payload: {}
      })
    ).toEqual({
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
    });
  });
  it('should handle POST_LABEL_SUCCESS', () => {
    expect(
      CanvasReducer(undefined, {
        type: POST_LABEL_SUCCESS,
        payload: {
          id: 0,
          name: 'Ben Label',
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
      })
    ).toEqual({
      inspectorType: null,
      inspector: {},
      canvas: {
        id: 0,
        name: 'Ben Label',
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
    });
  });
});
