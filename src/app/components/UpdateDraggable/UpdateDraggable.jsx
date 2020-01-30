import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Rnd } from 'react-rnd';
import '../../styles/styles.css';
import '../../styles/Resizable.css';
import {
  updateTextboxPosition,
  updateRectanglePosition,
  updateTextboxSize,
  updateRectangleSize
} from '../../store/actions/ProductActions';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
  color: 'black'
};

const propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.node
};

const defaultProps = {
  children: null
};

function UpdateDraggable({ type, id, x, y, width, height, children }) {
  const dispatch = useDispatch();

  const updatePositionState = (newX, newY) => {
    switch (type) {
      case 'textBox':
        dispatch(updateTextboxPosition(id, newX, newY));
        break;
      case 'rectangle':
        dispatch(updateRectanglePosition(id, newX, newY));
        break;
      default:
        console.log('bad');
    }
  };

  const updateSizeState = (newWidth, newHeight) => {
    switch (type) {
      case 'textBox':
        dispatch(updateTextboxSize(id, newWidth, newHeight));
        break;
      case 'rectangle':
        dispatch(updateRectangleSize(id, newWidth, newHeight));
        break;
      default:
        console.log('bad');
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
    >
      {children}
    </Rnd>
  );
}

UpdateDraggable.propTypes = propTypes;
UpdateDraggable.defaultProps = defaultProps;

export default UpdateDraggable;
