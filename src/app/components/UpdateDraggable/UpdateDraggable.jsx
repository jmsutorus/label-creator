import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Rnd } from 'react-rnd';
import '../../styles/Resizable.css';
import {
  updateRectanglePosition,
  updateBarcodePosition,
  updateTextboxPosition,
  updateRectangleSize,
  updateBarcodeSize,
  updateTextboxSize
} from '../../store/actions/CanvasActions';

const propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  zIndex: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node
};

const defaultProps = {
  children: null
};

function UpdateDraggable({ id, x, y, width, height, zIndex, type, children }) {
  const dispatch = useDispatch();

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    color: 'black',
    zIndex
  };

  const updatePositionState = (newX, newY) => {
    switch (type) {
      case 'textboxes': {
        dispatch(updateTextboxPosition(id, newX / 100, newY / 100));
        break;
      }
      case 'barcodes': {
        dispatch(updateBarcodePosition(id, newX / 100, newY / 100));
        break;
      }
      case 'rectangles': {
        dispatch(updateRectanglePosition(id, newX / 100, newY / 100));
        break;
      }
      default: {
        console.log('bad');
      }
    }
  };

  const updateSizeState = (newWidth, newHeight) => {
    switch (type) {
      case 'textboxes': {
        dispatch(updateTextboxSize(id, newWidth / 100, newHeight / 100));
        break;
      }
      case 'barcodes': {
        dispatch(updateBarcodeSize(id, newWidth / 100, newHeight / 100));
        break;
      }
      case 'rectangles': {
        dispatch(updateRectangleSize(id, newWidth / 100, newHeight / 100));
        break;
      }
      default: {
        console.log('bad');
      }
    }
  };

  return (
    <Rnd
      style={style}
      size={{ width, height }}
      position={{ x, y }}
      onDragStop={(e, d) => {
        updatePositionState(d.x, d.y);
      }}
      onResize={(e, direction, ref, delta, position) => {
        updateSizeState(ref.offsetWidth, ref.offsetHeight);
        updatePositionState(position.x, position.y);
      }}
      bounds="parent"
      enableUserSelectHack={false}
    >
      {children}
    </Rnd>
  );
}

UpdateDraggable.propTypes = propTypes;
UpdateDraggable.defaultProps = defaultProps;

export default UpdateDraggable;
