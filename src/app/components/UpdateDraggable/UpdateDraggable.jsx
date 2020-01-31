import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Rnd } from 'react-rnd';
import '../../styles/styles.css';
import '../../styles/Resizable.css';
import { updatePosition, updateSize } from '../../store/actions/ProductActions';

const propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  zIndex: PropTypes.number.isRequired,
  children: PropTypes.node
};

const defaultProps = {
  children: null
};

function UpdateDraggable({ id, x, y, width, height, zIndex, children }) {
  const dispatch = useDispatch();

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    background: '#f0f0f0',
    color: 'black',
    zIndex
  };

  const updatePositionState = (newX, newY) => {
    dispatch(updatePosition(id, newX, newY));
  };

  const updateSizeState = (newWidth, newHeight) => {
    dispatch(updateSize(id, newWidth, newHeight));
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
