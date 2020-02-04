import CanvasReducer from '../CanvasReducer';
import * as types from '../../constants/CanvasTypes';

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
        width: 600,
        height: 400
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
        width: 600,
        height: 400
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
});
