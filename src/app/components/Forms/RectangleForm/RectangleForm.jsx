import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateRectangle, deleteRectangle } from '../../../store/actions/CanvasActions';
import '../styles/styles.scss';

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

  const handleDelete = () => {
    dispatch(deleteRectangle(rectangle));
  };

  return (
    <div>
      <form onSubmit={() => handleChange()}>
        <div className="">
          <label htmlFor="name" className="form-label">
            <span id="name" className="form-name">
              Name
            </span>
            <input
              className="form-input"
              placeholder="name"
              value={rectangle.name}
              type="text"
              id="name"
              onChange={e => handleChange('name', e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="x" className="form-label">
            <span id="x" className="form-name">
              X
            </span>
            <input
              className="form-input"
              placeholder="12"
              value={rectangle.x}
              type="number"
              id="x"
              onChange={e => handleChange('x', e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="y" className="form-label">
            <span id="y" className="form-name">
              Y
            </span>
            <input
              className="form-input"
              placeholder="24"
              value={rectangle.y}
              type="number"
              id="y"
              onChange={e => handleChange('y', e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="width" className="form-label">
            <span id="width" className="form-name">
              Width
            </span>
            <input
              className="form-input"
              placeholder="100"
              value={rectangle.width}
              type="number"
              id="width"
              onChange={e => handleChange('width', e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="height" className="form-label">
            <span id="height" className="form-name">
              Height
            </span>
            <input
              className="form-input"
              placeholder="200"
              value={rectangle.height}
              type="number"
              id="height"
              onChange={e => handleChange('height', e.target.value)}
            />
          </label>
        </div>
      </form>
      <button type="button" className="label-button" onClick={() => handleDelete()}>
        Delete Property
      </button>
    </div>
  );
}

RectangleForm.propTypes = propTypes;
RectangleForm.defaultProps = defaultProps;

export default RectangleForm;
