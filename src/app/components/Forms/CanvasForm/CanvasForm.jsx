import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../styles/Resizable.css';
import { updateCanvas } from '../../../store/actions/CanvasActions';
import '../styles/styles.scss';

function CanvasForm() {
  const canvas = useSelector(state => state.CanvasReducer.canvas);
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
      <div className="">
        <label htmlFor="name" className="form-label">
          <span id="name" className="form-name">
            Name
          </span>
          <input
            className="form-input"
            placeholder="name"
            value={canvas.name}
            type="text"
            id="name"
            onChange={e => handleChange('name', e.target.value)}
          />
        </label>
      </div>
      <div className="">
        <label htmlFor="description" className="form-label">
          <span id="description" className="form-name">
            Desc
          </span>
          <input
            className="form-input"
            placeholder="description"
            value={canvas.description}
            type="text"
            id="description"
            onChange={e => handleChange('description', e.target.value)}
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
            placeholder="200"
            value={canvas.width}
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
            placeholder="100"
            value={canvas.height}
            type="number"
            id="height"
            onChange={e => handleChange('height', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default CanvasForm;
