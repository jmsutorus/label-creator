import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setInspector } from '../../store/actions/ProductActions';

const propTypes = {
  type: PropTypes.string.isRequired,
  rectangle: PropTypes.shape({
    name: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }),
  textBox: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    fontSize: PropTypes.number,
    fontType: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }),
  children: PropTypes.node
};

const defaultProps = {
  rectangle: null,
  textBox: null,
  children: null
};

function WithInspector({ type, rectangle, textBox, children }) {
  const dispatch = useDispatch();

  const updateInspector = () => {
    switch (type) {
      case 'textBox': {
        dispatch(setInspector('textBox', textBox));
        break;
      }
      case 'rectangle': {
        dispatch(setInspector('rectangle', rectangle));
        break;
      }
      default: {
        console.log('bad');
      }
    }
  };

  return (
    <button
      type="button"
      onClick={() => updateInspector()}
      className=""
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </button>
  );
}

WithInspector.propTypes = propTypes;
WithInspector.defaultProps = defaultProps;

export default WithInspector;
