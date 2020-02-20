import React from 'react';
import { Link } from 'react-router-dom';

function GeneratePDF() {
  return (
    <div style={{ margin: '6px' }}>
      <Link to="pdf" className="label-button" type="button">
        Preview PDF
      </Link>
    </div>
  );
}

export default GeneratePDF;
