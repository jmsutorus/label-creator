import React from 'react';
import Tool from '../Tool';

function Tools() {
  return (
    <div
      className=""
      title="tools"
      style={{ overflow: 'hidden', clear: 'both', marginTop: '24px', marginLeft: '24px' }}
    >
      <Tool name="textBox" />
      <Tool name="barcode" />
      <Tool name="rectangle" />
    </div>
  );
}

export default Tools;
