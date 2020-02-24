import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setInspector } from '../../store/actions/CanvasActions';

const propTypes = {
  object: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    fontSize: PropTypes.number,
    fontType: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    rotate: PropTypes.number
  }).isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node
};

const defaultProps = {
  children: null
};

function WithInspector({ object, type, children }) {
  const dispatch = useDispatch();

  const updateInspector = () => {
    dispatch(setInspector(object, type));
  };

  return (
    <button
      type="button"
      onClick={() => updateInspector()}
      className=""
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
        backgroundColor: 'inherit',
        transform: `rotate(${object.rotate}deg)`
      }}
    >
      {children}
    </button>
  );
}

WithInspector.propTypes = propTypes;
WithInspector.defaultProps = defaultProps;

export default WithInspector;
