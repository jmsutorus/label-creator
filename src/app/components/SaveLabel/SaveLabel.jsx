import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveLabel } from '../../store/actions/LabelActions';

function SaveLabel() {
  const dispatch = useDispatch();
  const canvas = useSelector(state => state.CanvasReducer.canvas);

  return (
    <div>
      <button className="label-button" type="button" onClick={() => dispatch(saveLabel(canvas))}>
        Save Label
      </button>
    </div>
  );
}

export default SaveLabel;
