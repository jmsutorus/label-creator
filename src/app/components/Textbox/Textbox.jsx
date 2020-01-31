import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateObject } from '../../store/actions/ProductActions';

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
  const dispatch = useDispatch();

  const handleChange = value => {
    const newTextbox = {
      ...textBox,
      name: value
    };
    dispatch(updateObject(newTextbox));
  };

  return (
    <div className="">
      <textarea
        style={{
          fontSize: textBox.fontSize,
          width: textBox.width,
          height: textBox.height,
          position: 'absolute',
          top: 0,
          left: 0
        }}
        value={textBox.name}
        type="text"
        id="textBox Name"
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
}

Textbox.propTypes = propTypes;
Textbox.defaultProps = defaultProps;

export default Textbox;
