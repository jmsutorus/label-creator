import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setInspector } from '../../store/actions/ProductActions';

const propTypes = {
  object: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    fontSize: PropTypes.number,
    fontType: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired,
  children: PropTypes.node
};

const defaultProps = {
  children: null
};

function WithInspector({ object, children }) {
  const dispatch = useDispatch();

  const updateInspector = () => {
    dispatch(setInspector(object));
    // switch (type) {
    //   case 'textBox': {
    //     dispatch(setInspector('textBox', textBox));
    //     break;
    //   }
    //   case 'rectangle': {
    //     dispatch(setInspector('rectangle', rectangle));
    //     break;
    //   }
    //   default: {
    //     console.log('bad');
    //   }
    // }
  };

  return (
    <button
      type="button"
      onClick={() => updateInspector()}
      className=""
      style={{ width: '100%', height: '100%', border: 'none' }}
    >
      {children}
    </button>
  );
}

WithInspector.propTypes = propTypes;
WithInspector.defaultProps = defaultProps;

export default WithInspector;
