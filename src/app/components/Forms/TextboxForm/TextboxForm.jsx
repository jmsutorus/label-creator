import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateTextbox, deleteTextbox } from '../../../store/actions/CanvasActions';
import '../styles/styles.scss';
import FormInput from '../FormInput';

const propTypes = {
  textBox: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    fontSize: PropTypes.number,
    fontType: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    rotate: PropTypes.number
  }).isRequired
};

const defaultProps = {};

function TextboxForm({ textBox }) {
  const dispatch = useDispatch();

  const handleChange = (target, value) => {
    let transformValue = value;
    if (target !== 'name') {
      transformValue = parseInt(value, 10);
    }
    const newTextbox = {
      ...textBox,
      [target]: transformValue
    };
    dispatch(updateTextbox(newTextbox));
  };

  const handleDelete = () => {
    dispatch(deleteTextbox(textBox));
  };

  return (
    <div>
      <form onSubmit={() => handleChange()}>
        <FormInput id="name" name="Name" value={textBox.name} type="text" onChange={handleChange} />
        <FormInput id="x" name="X" value={textBox.x} type="number" onChange={handleChange} />
        <FormInput id="y" name="Y" value={textBox.y} type="number" onChange={handleChange} />
        <FormInput
          id="width"
          name="Width"
          value={textBox.width}
          type="number"
          onChange={handleChange}
        />
        <FormInput
          id="height"
          name="Height"
          value={textBox.height}
          type="number"
          onChange={handleChange}
        />
        <FormInput
          id="fontSize"
          name="Font Size"
          value={textBox.fontSize}
          type="number"
          onChange={handleChange}
        />
        <FormInput
          id="rotate"
          name="Rotation"
          value={textBox.rotate}
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

TextboxForm.propTypes = propTypes;
TextboxForm.defaultProps = defaultProps;

export default TextboxForm;
