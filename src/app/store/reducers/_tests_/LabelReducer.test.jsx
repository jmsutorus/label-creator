import LabelReducer from '../LabelReducer';
import * as types from '../../constants/LabelTypes';

describe('label reducer', () => {
  it('should return the initial state', () => {
    expect(LabelReducer(undefined, {})).toEqual({
      loadingLabelResults: false,
      labelResults: null,
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
      labelResults: null,
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
      labelResults: null,
      labelResultsError: '404',
      loadingLabelDelete: false,
      labelDeleteError: null
    });
  });
});
