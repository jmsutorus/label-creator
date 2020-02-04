import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateTextbox, deleteTextbox } from '../../../store/actions/CanvasActions';
import '../styles/styles.scss';

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
        <div className="">
          <label htmlFor="name" className="form-label">
            <span id="name" className="form-name">
              Name
            </span>
            <input
              className="form-input"
              placeholder="name"
              value={textBox.name}
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
              placeholder="24"
              value={textBox.x}
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
              placeholder="12"
              value={textBox.y}
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
              value={textBox.width}
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
              value={textBox.height}
              type="number"
              id="height"
              onChange={e => handleChange('height', e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="fontSize" className="form-label">
            <span id="fontSize" className="form-name">
              Font Size
            </span>
            <input
              className="form-input"
              placeholder="18"
              value={textBox.fontSize}
              type="number"
              id="fontSize"
              onChange={e => handleChange('fontSize', e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="rotate" className="form-label">
            <span id="rotate" className="form-name">
              Rotate
            </span>
            <input
              className="form-input"
              placeholder="90"
              value={textBox.rotate}
              type="number"
              id="rotate"
              onChange={e => handleChange('rotate', e.target.value)}
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

TextboxForm.propTypes = propTypes;
TextboxForm.defaultProps = defaultProps;

export default TextboxForm;
