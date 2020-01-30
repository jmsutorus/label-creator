import React from 'react';
import PropTypes from 'prop-types';
import './Barcode.scss';

const propTypes = {
  barcode: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    height: PropTypes.number
  }).isRequired
};

const defaultProps = {};

function Barcode({ barcode }) {
  return (
    <div className="barcode">
      <div>hi</div>
    </div>
  );
}

Barcode.propTypes = propTypes;
Barcode.defaultProps = defaultProps;

export default Barcode;
