import React from 'react';
import { useSelector } from 'react-redux';
import Label from '../Label';

function LabelsList() {
  const labelResults = useSelector(state => state.LabelReducer.labelResults);

  return (
    <div style={{ margin: '12px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>Labels</div>
      {labelResults && labelResults.map(label => <Label key={label.id} label={label} />)}
    </div>
  );
}

export default LabelsList;
