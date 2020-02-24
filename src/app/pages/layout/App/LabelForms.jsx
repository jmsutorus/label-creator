import React from 'react';
import './App.scss';
import Properties from '../../../components/Forms/Properties';
import CanvasForm from '../../../components/Forms/CanvasForm';
import SaveLabel from '../../../components/SaveLabel';
import GeneratePDF from '../../../components/GeneratePDF';
import DeleteLabel from '../../../components/DeleteLabel';

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
        <SaveLabel />
        <Properties />
      </div>
      <div>
        <GeneratePDF />
        <DeleteLabel />
      </div>
    </div>
  );
}

export default LabelForms;
