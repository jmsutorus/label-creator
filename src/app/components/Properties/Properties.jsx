import React from 'react';
import { useSelector } from 'react-redux';
import RectangleForm from '../RectangleForm';
import Barcode from '../Barcode';
import TextboxForm from '../TextboxForm';

function getProperties(type, inspector) {
  switch (type) {
    case 'textBox':
      return <TextboxForm textBox={inspector} />;
    case 'barcode':
      return <Barcode barcode={inspector} />;
    case 'rectangle':
      return <RectangleForm rectangle={inspector} />;
    default:
      return <div>default</div>;
  }
}

function Properties() {
  const inspectorType = useSelector(state => state.ProductReducer.inspectorType);
  const inspector = useSelector(state => state.ProductReducer.inspector);

  return (
    <div>
      <div>Property Inspector</div>
      {getProperties(inspectorType, inspector)}
    </div>
  );
}

export default Properties;
