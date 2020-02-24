import { CALL_API } from '../../middleware/api';
import {
  GET_DATABASE_REQUEST,
  GET_DATABASE_FAILURE,
  GET_DATABASE_SUCCESS
} from '../constants/DatabaseTypes';

export function getDatabases() {
  return {
    [CALL_API]: {
      method: 'GET',
      endpoint: 'http://localhost:8089/labelPOC/database/all',
      types: [GET_DATABASE_REQUEST, GET_DATABASE_SUCCESS, GET_DATABASE_FAILURE],
      data: {}
    }
  };
}

export default {
  getDatabases
};
