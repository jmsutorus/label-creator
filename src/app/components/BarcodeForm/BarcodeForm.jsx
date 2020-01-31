import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateObject } from '../../store/actions/ProductActions';

const propTypes = {
  barcode: PropTypes.shape({
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

function BarcodeForm({ barcode }) {
  const dispatch = useDispatch();

  const handleChange = (target, value) => {
    let transformValue = value;
    if (target !== 'name') {
      transformValue = parseInt(value, 10);
    }
    const newTextbox = {
      ...barcode,
      [target]: transformValue
    };
    dispatch(updateObject(newTextbox));
  };

  return (
    <div>
      <form onSubmit={() => handleChange()}>
        <div className="">
          <label htmlFor="name">
            <span id="name">Name</span>
            <input
              value={barcode.name}
              type="text"
              id="name"
              onChange={e => handleChange('name', e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="x">
            <span id="x">X</span>
            <input
              value={barcode.x}
              type="number"
              id="x"
              onChange={e => handleChange('x', e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="y">
            <span id="y">y</span>
            <input
              value={barcode.y}
              type="number"
              id="y"
              onChange={e => handleChange('y', e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="width">
            <span id="width">Width</span>
            <input
              value={barcode.width}
              type="number"
              id="width"
              onChange={e => handleChange('width', e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="height">
            <span id="height">Height</span>
            <input
              value={barcode.height}
              type="number"
              id="height"
              onChange={e => handleChange('height', e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="fontSize">
            <span id="fontSize">Font Size</span>
            <input
              value={barcode.fontSize}
              type="number"
              id="fontSize"
              onChange={e => handleChange('fontSize', e.target.value)}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

BarcodeForm.propTypes = propTypes;
BarcodeForm.defaultProps = defaultProps;

export default BarcodeForm;
