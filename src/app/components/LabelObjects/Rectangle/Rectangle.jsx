import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  rectangle: PropTypes.shape({
    name: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired
};

const defaultProps = {};

function Rectangle() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'grey',
        border: 'none'
      }}
    />
  );
}

Rectangle.propTypes = propTypes;
Rectangle.defaultProps = defaultProps;

export default Rectangle;
