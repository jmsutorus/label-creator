import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateRectangle, deleteRectangle } from '../../../store/actions/CanvasActions';
import '../styles/styles.scss';
import FormInput from '../FormInput';

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
        <FormInput
          id="name"
          name="Name"
          value={rectangle.name}
          type="text"
          onChange={handleChange}
        />
        <FormInput id="x" name="X" value={rectangle.x} type="number" onChange={handleChange} />
        <FormInput id="y" name="Y" value={rectangle.y} type="number" onChange={handleChange} />
        <FormInput
          id="width"
          name="Width"
          value={rectangle.width}
          type="number"
          onChange={handleChange}
        />
        <FormInput
          id="height"
          name="Height"
          value={rectangle.height}
          type="number"
          onChange={handleChange}
        />
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
