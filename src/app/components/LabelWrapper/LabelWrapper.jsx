import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Resizable.css';

const propTypes = {
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

function LabelWrapper({ x, y, width, height, zIndex, children }) {
  const style = {
    position: 'absolute',
    top: y,
    left: x,
    height,
    width,
    zIndex
  };

  return (
    <div style={style} size={{ width, height }} position={{ x, y }} enableUserSelectHack={false}>
      {children}
    </div>
  );
}

LabelWrapper.propTypes = propTypes;
LabelWrapper.defaultProps = defaultProps;

export default LabelWrapper;
