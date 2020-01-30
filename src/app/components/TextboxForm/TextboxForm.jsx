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

function TextboxForm({ textBox }) {
  return (
    <div className="">
      <div>{textBox.name}</div>
    </div>
  );
}

TextboxForm.propTypes = propTypes;
TextboxForm.defaultProps = defaultProps;

export default TextboxForm;
