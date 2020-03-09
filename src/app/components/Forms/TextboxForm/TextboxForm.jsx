import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    rotate: PropTypes.number,
    field: PropTypes.field
  }).isRequired
};

const defaultProps = {};

function TextboxForm({ textBox }) {
  const canvas = useSelector(state => state.CanvasReducer.canvas);
  const databases = useSelector(state => state.DatabaseReducer.databaseResults);
  const dispatch = useDispatch();

  const handleChange = (target, value) => {
    let transformValue = value;
    if (target !== 'name' && target !== 'field') {
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
        <div className="">
          <label htmlFor="field" className="form-label">
            <span id="field" className="form-name">
              Field
            </span>
            <select
              className="form-input"
              placeholder="field"
              value={textBox?.field || ''}
              id="field"
              onChange={e => handleChange('field', e.target.value)}
            >
              <option value="">Select Field</option>
              {databases &&
                databases
                  .filter(db => db.name === canvas.database)[0]
                  ?.tables.filter(tb => tb.name === canvas.table)[0]
                  ?.fieldNames.map(fd => (
                    <option value={fd} key={fd}>
                      {fd}
                    </option>
                  ))}
            </select>
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
