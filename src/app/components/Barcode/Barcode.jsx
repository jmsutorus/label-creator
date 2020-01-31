import React from 'react';
import PropTypes from 'prop-types';
import barcodeImg from '../../../assets/barcode.webp';
import './Barcode.scss';

const propTypes = {
  barcode: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    text: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    fontSize: PropTypes.number,
    fontType: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired
};

const defaultProps = {};

function Barcode({ barcode }) {
  return (
    <div className="barcode">
      <img
        id={barcode.id}
        src={barcodeImg}
        alt="barcode"
        className="barcode-image"
        draggable={false}
      />
    </div>
  );
}

Barcode.propTypes = propTypes;
Barcode.defaultProps = defaultProps;

export default Barcode;
