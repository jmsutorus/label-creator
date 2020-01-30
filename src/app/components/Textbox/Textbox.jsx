import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  textBox: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    fontSize: PropTypes.number,
    fontType: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired
};

const defaultProps = {};

function Textbox({ textBox }) {
  return (
    <div className="">
      <div>This is a textbox</div>
      <div>
        width:
        {textBox.width}
      </div>
      <div>
        height:
        {textBox.height}
      </div>
      <div>
        x:
        {textBox.x.toFixed(0)}
      </div>
      <div>
        y:
        {textBox.y.toFixed(0)}
      </div>
    </div>
  );
}

Textbox.propTypes = propTypes;
Textbox.defaultProps = defaultProps;

export default Textbox;
