import { CALL_API } from '../../middleware/api';
import {
  GET_LABEL_REQUEST,
  GET_LABEL_FAILURE,
  GET_LABEL_SUCCESS,
  POST_LABEL_REQUEST,
  POST_LABEL_SUCCESS,
  POST_LABEL_FAILURE,
  DELETE_LABEL_REQUEST,
  DELETE_LABEL_SUCCESS,
  DELETE_LABEL_FAILURE
} from '../constants/LabelTypes';

export function getLabels() {
  return {
    [CALL_API]: {
      method: 'GET',
      endpoint: 'http://localhost:8089/labelPOC/label/all',
      types: [GET_LABEL_REQUEST, GET_LABEL_SUCCESS, GET_LABEL_FAILURE],
      data: {}
    }
  };
}

export function saveLabel(label) {
  return {
    [CALL_API]: {
      method: 'POST',
      endpoint: 'http://localhost:8089/labelPOC/label/save',
      types: [POST_LABEL_REQUEST, POST_LABEL_SUCCESS, POST_LABEL_FAILURE],
      data: label
    }
  };
}

export function deleteLabel(label) {
  return {
    [CALL_API]: {
      method: 'DELETE',
      endpoint: `http://localhost:8089/labelPOC/label/delete/${label.id}`,
      types: [DELETE_LABEL_REQUEST, DELETE_LABEL_SUCCESS, DELETE_LABEL_FAILURE],
      data: label
    }
  };
}

export default {
  getLabels,
  saveLabel,
  deleteLabel
};
