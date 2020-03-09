import DatabaseReducer from '../DatabaseReducer';
import * as types from '../../constants/DatabaseTypes';

describe('label reducer', () => {
  it('should return the initial state', () => {
    expect(DatabaseReducer(undefined, {})).toEqual({
      loadingDatabaseResults: false,
      databaseResults: [],
      databaseResultsError: null
    });
  });
  it('should handle GET_LABEL_REQUEST', () => {
    expect(
      DatabaseReducer(undefined, {
        type: types.GET_DATABASE_REQUEST
      })
    ).toEqual({
      loadingDatabaseResults: true,
      databaseResults: [],
      databaseResultsError: null
    });
  });
  it('should handle GET_LABEL_FAILURE', () => {
    expect(
      DatabaseReducer(undefined, {
        type: types.GET_DATABASE_FAILURE,
        payload: { message: '404', title: '' }
      })
    ).toEqual({
      loadingDatabaseResults: false,
      databaseResults: [],
      databaseResultsError: '404'
    });
  });
  it('should handle GET_LABEL_SUCCESS', () => {
    expect(
      DatabaseReducer(undefined, {
        type: types.GET_DATABASE_SUCCESS,
        payload: [{ name: 'one' }, { name: 'two' }, { name: 'three' }]
      })
    ).toEqual({
      loadingDatabaseResults: false,
      databaseResults: [{ name: 'one' }, { name: 'two' }, { name: 'three' }],
      databaseResultsError: null
    });
  });
});
