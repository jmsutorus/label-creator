import React from 'react';
import Tool from '../Tool';

function Tools() {
  return (
    <div className="" style={{ overflow: 'hidden', clear: 'both' }}>
      <Tool name="textBox" />
      <Tool name="barcode" />
      <Tool name="rectangle" />
    </div>
  );
}

export default Tools;
