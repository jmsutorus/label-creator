import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../styles/Resizable.css';
import { updateCanvas } from '../../../store/actions/CanvasActions';
import '../styles/styles.scss';
import FormInput from '../FormInput';

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
    </div>
  );
}

export default CanvasForm;
