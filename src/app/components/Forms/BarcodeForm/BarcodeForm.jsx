import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateBarcode, deleteBarcode } from '../../../store/actions/CanvasActions';
import '../styles/styles.scss';
import FormInput from '../FormInput';

const propTypes = {
  barcode: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    fontSize: PropTypes.number,
    fontType: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    rotate: PropTypes.number,
    field: PropTypes.string
  }).isRequired
};

const defaultProps = {};

function BarcodeForm({ barcode }) {
  const canvas = useSelector(state => state.CanvasReducer.canvas);
  const databases = useSelector(state => state.DatabaseReducer.databaseResults);
  const dispatch = useDispatch();

  const handleChange = (target, value) => {
    let transformValue = value;
    if (target !== 'name' && target !== 'field') {
      transformValue = parseInt(value, 10);
    }
    const newBarcode = {
      ...barcode,
      [target]: transformValue
    };
    dispatch(updateBarcode(newBarcode));
  };

  const handleDelete = () => {
    dispatch(deleteBarcode(barcode));
  };

  return (
    <div>
      <form onSubmit={() => handleChange()}>
        <FormInput id="name" name="Name" value={barcode.name} type="text" onChange={handleChange} />
        <FormInput id="x" name="X" value={barcode.x} type="number" onChange={handleChange} />
        <FormInput id="y" name="Y" value={barcode.y} type="number" onChange={handleChange} />
        <FormInput
          id="width"
          name="Width"
          value={barcode.width}
          type="number"
          onChange={handleChange}
        />
        <FormInput
          id="height"
          name="Height"
          value={barcode.height}
          type="number"
          onChange={handleChange}
        />
        <FormInput
          id="rotate"
          name="Rotation"
          value={barcode.rotate}
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
              value={barcode?.field || ''}
              id="field"
              onChange={e => handleChange('field', e.target.value)}
            >
              <option value="">Select Field</option>
              {databases &&
                databases
                  .filter(db => db.name === canvas.database)[0]
                  ?.tables.filter(tb => tb.name === canvas.table)[0]
                  ?.fields.map(fd => (
                    <option value={fd.name} key={fd.name}>
                      {fd.name}
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

BarcodeForm.propTypes = propTypes;
BarcodeForm.defaultProps = defaultProps;

export default BarcodeForm;
