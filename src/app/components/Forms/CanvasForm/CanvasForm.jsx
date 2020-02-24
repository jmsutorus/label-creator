import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../styles/Resizable.css';
import { updateCanvas } from '../../../store/actions/CanvasActions';
import '../styles/styles.scss';
import FormInput from '../FormInput';

function CanvasForm() {
  const canvas = useSelector(state => state.CanvasReducer.canvas);
  const databases = useSelector(state => state.DatabaseReducer.databaseResults);
  const dispatch = useDispatch();

  const handleChange = (target, value) => {
    const newTextbox = {
      ...canvas,
      [target]: value
    };
    dispatch(updateCanvas(newTextbox));
  };

  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Label</div>
      <FormInput id="name" name="Name" value={canvas.name} type="text" onChange={handleChange} />
      <FormInput
        id="description"
        name="Desc"
        value={canvas.description}
        type="text"
        onChange={handleChange}
      />
      <FormInput
        id="height"
        name="Height"
        value={canvas.height}
        type="number"
        onChange={handleChange}
      />
      <FormInput
        id="width"
        name="Width"
        value={canvas.width}
        type="number"
        onChange={handleChange}
      />
      <div className="">
        <label htmlFor="database" className="form-label">
          <span id="database" className="form-name">
            Database
          </span>
          <select
            className="form-input"
            placeholder="database"
            value={canvas?.database || ''}
            id="database"
            onChange={e => handleChange('database', e.target.value)}
          >
            <option value="">Select Database</option>
            {databases &&
              databases.map(db => (
                <option value={db.name} key={db.name}>
                  {db.name}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div className="">
        <label htmlFor="table" className="form-label">
          <span id="table" className="form-name">
            Table
          </span>
          <select
            className="form-input"
            placeholder="table"
            value={canvas?.table || ''}
            id="table"
            onChange={e => handleChange('table', e.target.value)}
          >
            <option value="">Select Table</option>
            {databases &&
              databases
                .filter(db => db.name === canvas.database)[0]
                ?.tables.map(tb => (
                  <option value={tb.name} key={tb.name}>
                    {tb.name}
                  </option>
                ))}
          </select>
        </label>
      </div>
    </div>
  );
}

export default CanvasForm;
