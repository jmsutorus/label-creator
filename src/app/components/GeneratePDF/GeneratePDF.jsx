import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function GeneratePDF() {
  const canvas = useSelector(state => state.CanvasReducer.canvas);
  const path = `pdf/${canvas.id}`;
  return (
    <div style={{ margin: '6px' }}>
      <Link to={path} className="label-button" type="button">
        Preview PDF
      </Link>
    </div>
  );
}

export default GeneratePDF;
