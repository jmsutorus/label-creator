import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateRectangle } from '../../store/actions/ProductActions';

const propTypes = {
  rectangle: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired
};

const defaultProps = {};

function RectangleForm({ rectangle }) {
  const dispatch = useDispatch();

  const handleChange = (target, value) => {
    let transformValue = value;
    if (target !== 'name') {
      transformValue = parseInt(value, 10);
    }
    const newRect = {
      ...rectangle,
      [target]: transformValue
    };
    dispatch(updateRectangle(newRect));
  };

  return (
    <div>
      <form onSubmit={() => handleChange()}>
        <div className="">
          <label htmlFor="name">
            <span id="name">Name</span>
            <input
              value={rectangle.name}
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
              value={rectangle.x}
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
              value={rectangle.y}
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
              value={rectangle.width}
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
              value={rectangle.height}
              type="number"
              id="height"
              onChange={e => handleChange('height', e.target.value)}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

RectangleForm.propTypes = propTypes;
RectangleForm.defaultProps = defaultProps;

export default RectangleForm;
