import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteLabel } from '../../store/actions/LabelActions';

function DeleteLabel() {
  const dispatch = useDispatch();
  const canvas = useSelector(state => state.CanvasReducer.canvas);

  return (
    <div style={{ margin: '6px' }}>
      <button className="label-button" type="button" onClick={() => dispatch(deleteLabel(canvas))}>
        Delete Label
      </button>
    </div>
  );
}

export default DeleteLabel;
