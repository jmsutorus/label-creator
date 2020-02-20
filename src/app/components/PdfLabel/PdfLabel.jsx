import React from 'react';
import { useSelector } from 'react-redux';
import Rectangle from '../LabelObjects/Rectangle';
import Textbox from '../LabelObjects/Textbox';
import Barcode from '../LabelObjects/Barcode';
import LabelWrapper from '../LabelWrapper';
import './PdfLabel.scss';

function PdfLabel() {
  const canvas = useSelector(state => state.CanvasReducer.canvas);

  const style = {
    height: `${canvas.height * 100}px`,
    width: `${canvas.width * 100}px`
  };

  return (
    <div style={style} className="pdfLabel">
      {canvas.textboxes &&
        canvas.textboxes.map(object => (
          <LabelWrapper
            x={object.x * 100}
            y={object.y * 100}
            width={object.width * 100}
            height={object.height * 100}
          >
            <Textbox textBox={object} />
          </LabelWrapper>
        ))}
      {canvas.rectangles &&
        canvas.rectangles.map(object => (
          <LabelWrapper
            x={object.x * 100}
            y={object.y * 100}
            width={object.width * 100}
            height={object.height * 100}
          >
            <Rectangle rectangle={object} />
          </LabelWrapper>
        ))}
      {canvas.barcodes &&
        canvas.barcodes.map(object => (
          <LabelWrapper
            x={object.x * 100}
            y={object.y * 100}
            width={object.width * 100}
            height={object.height * 100}
          >
            <Barcode barcode={object} />
          </LabelWrapper>
        ))}
    </div>
  );
}

export default PdfLabel;
