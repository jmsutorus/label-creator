import React from 'react';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import { addRectangle, addTextBox } from '../../store/actions/ProductActions';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left'
};

const propTypes = {
  name: PropTypes.string.isRequired
};

const defaultProps = {};

const handleDropResult = (dispatch, item) => {
  switch (item.name) {
    case 'textBox': {
      dispatch(addTextBox());
      break;
    }
    case 'rectangle': {
      dispatch(addRectangle());
      break;
    }
    case 'barcode': {
      dispatch(addRectangle());
      break;
    }
    default: {
      dispatch(addRectangle());
    }
  }
};

function Tool({ name }) {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'dragBox' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        handleDropResult(dispatch, item);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div className="" ref={drag} style={{ ...style, opacity }}>
      {name}
    </div>
  );
}

Tool.propTypes = propTypes;
Tool.defaultProps = defaultProps;

export default Tool;
