import React from 'react';
import './App.scss';
import Properties from '../../../components/Forms/Properties';
import CanvasForm from '../../../components/Forms/CanvasForm';
import GeneratePDF from '../../../components/GeneratePDF';

function LabelForms() {
  return (
    <div
      title="labelForms"
      style={{
        width: '250px',
        paddingLeft: '12px',
        paddingRight: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <CanvasForm />
        <Properties />
      </div>
      <div>
        <GeneratePDF />
      </div>
    </div>
  );
}

export default LabelForms;
