import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateTextbox } from '../../../store/actions/CanvasActions';

const propTypes = {
  textBox: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    fontSize: PropTypes.number,
    fontType: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    rotate: PropTypes.number
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
    dispatch(updateTextbox(newTextbox));
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
          left: 0,
          resize: 'none',
          overflow: 'hidden',
          border: 'none',
          backgroundColor: 'inherit'
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
