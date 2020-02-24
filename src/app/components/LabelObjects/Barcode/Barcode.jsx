import React from 'react';
import PropTypes from 'prop-types';
import ReactBarcode from 'react-barcode';
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
    height: PropTypes.number,
    rotate: PropTypes.number,
    showNumber: PropTypes.bool
  }).isRequired
};

const defaultProps = {};

function Barcode({ barcode }) {
  return (
    <div className="barcode">
      <ReactBarcode
        value={barcode.name}
        background="none"
        width={barcode.width}
        height={barcode.height * 100}
        displayValue={barcode.showNumber}
      />
    </div>
  );
}

Barcode.propTypes = propTypes;
Barcode.defaultProps = defaultProps;

export default Barcode;
