import React from 'react';
import { useSelector } from 'react-redux';
import RectangleForm from '../RectangleForm';
import BarcodeForm from '../BarcodeForm';
import TextboxForm from '../TextboxForm';

function getProperties(type, inspector) {
  switch (type) {
    case 'textbox':
      return <TextboxForm textBox={inspector} />;
    case 'barcode':
      return <BarcodeForm barcode={inspector} />;
    case 'rectangle':
      return <RectangleForm rectangle={inspector} />;
    default:
      return <div />;
  }
}

function Properties() {
  const inspectorType = useSelector(state => state.CanvasReducer.inspectorType);
  const inspector = useSelector(state => state.CanvasReducer.inspector);

  return (
    <div style={{ marginTop: '12px' }}>
      {inspectorType !== null && (
        <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Property Inspector</div>
      )}
      {getProperties(inspectorType, inspector)}
    </div>
  );
}

export default Properties;
