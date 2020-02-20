import LabelReducer from '../LabelReducer';
import * as types from '../../constants/LabelTypes';

describe('label reducer', () => {
  it('should return the initial state', () => {
    expect(LabelReducer(undefined, {})).toEqual({
      loadingLabelResults: false,
      labelResults: [],
      labelResultsError: null,
      loadingLabelDelete: false,
      labelDeleteError: null
    });
  });
  it('should handle GET_LABEL_REQUEST', () => {
    expect(
      LabelReducer(undefined, {
        type: types.GET_LABEL_REQUEST
      })
    ).toEqual({
      loadingLabelResults: true,
      labelResults: [],
      labelResultsError: null,
      loadingLabelDelete: false,
      labelDeleteError: null
    });
  });
  it('should handle GET_LABEL_FAILURE', () => {
    expect(
      LabelReducer(undefined, {
        type: types.GET_LABEL_FAILURE,
        payload: { message: '404', title: '' }
      })
    ).toEqual({
      loadingLabelResults: false,
      labelResults: [],
      labelResultsError: '404',
      loadingLabelDelete: false,
      labelDeleteError: null
    });
  });
  it('should handle GET_LABEL_SUCCESS', () => {
    expect(
      LabelReducer(undefined, {
        type: types.GET_LABEL_SUCCESS,
        payload: [{ name: 'one' }, { name: 'two' }, { name: 'three' }]
      })
    ).toEqual({
      loadingLabelResults: false,
      labelResults: [{ name: 'one' }, { name: 'three' }, { name: 'two' }],
      labelResultsError: null,
      loadingLabelDelete: false,
      labelDeleteError: null
    });
  });
  it('should handle POST_LABEL_REQUEST', () => {
    expect(
      LabelReducer(undefined, {
        type: types.POST_LABEL_REQUEST
      })
    ).toEqual({
      loadingLabelResults: true,
      labelResults: [],
      labelResultsError: null,
      loadingLabelDelete: false,
      labelDeleteError: null
    });
  });
  it('should handle POST_LABEL_FAILURE', () => {
    expect(
      LabelReducer(undefined, {
        type: types.POST_LABEL_FAILURE,
        payload: { message: '404', title: '' }
      })
    ).toEqual({
      loadingLabelResults: false,
      labelResults: [],
      labelResultsError: '404',
      loadingLabelDelete: false,
      labelDeleteError: null
    });
  });
  it('should handle POST_LABEL_SUCCESS', () => {
    expect(
      LabelReducer(undefined, {
        type: types.POST_LABEL_SUCCESS,
        payload: { name: 'one' }
      })
    ).toEqual({
      loadingLabelResults: false,
      labelResults: [{ name: 'one' }],
      labelResultsError: null,
      loadingLabelDelete: false,
      labelDeleteError: null
    });
  });
  it('should handle DELETE_LABEL_REQUEST', () => {
    expect(
      LabelReducer(undefined, {
        type: types.DELETE_LABEL_REQUEST
      })
    ).toEqual({
      loadingLabelResults: false,
      labelResults: [],
      labelResultsError: null,
      loadingLabelDelete: true,
      labelDeleteError: null
    });
  });
  it('should handle DELETE_LABEL_FAILURE', () => {
    expect(
      LabelReducer(undefined, {
        type: types.DELETE_LABEL_FAILURE,
        payload: { message: '404', title: '' }
      })
    ).toEqual({
      loadingLabelResults: false,
      labelResults: [],
      labelResultsError: null,
      loadingLabelDelete: false,
      labelDeleteError: '404'
    });
  });
  it('should handle DELETE_LABEL_SUCCESS', () => {
    expect(
      LabelReducer(undefined, {
        type: types.DELETE_LABEL_SUCCESS,
        payload: [{ name: 'one' }]
      })
    ).toEqual({
      loadingLabelResults: false,
      labelResults: [{ name: 'one' }],
      labelResultsError: null,
      loadingLabelDelete: false,
      labelDeleteError: null
    });
  });
});
