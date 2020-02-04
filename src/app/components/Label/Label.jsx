import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setViewLabel } from '../../store/actions/CanvasActions';

const propTypes = {
  label: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    upc: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    textboxes: PropTypes.array,
    rectangles: PropTypes.array,
    barcodes: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired
};

const defaultProps = {};

function Label({ label }) {
  const dispatch = useDispatch();

  return (
    <div className="">
      <button className="label-button" type="button" onClick={() => dispatch(setViewLabel(label))}>
        {label.name}
      </button>
    </div>
  );
}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
