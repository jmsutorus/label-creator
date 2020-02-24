import React from 'react';
import { useSelector } from 'react-redux';
import Rectangle from '../LabelObjects/Rectangle';
import Textbox from '../LabelObjects/Textbox';
import Barcode from '../LabelObjects/Barcode';
import LabelWrapper from '../LabelWrapper';
import './PdfLabel.scss';

function PdfLabel() {
  const canvas = useSelector(state => state.CanvasReducer.canvas);
  const databases = useSelector(state => state.DatabaseReducer.databaseResults);

  const style = {
    height: `${canvas.height * 100}px`,
    width: `${canvas.width * 100}px`
  };

  const textBox = object => {
    const text = databases
      .filter(db => db.name === canvas.database)[0]
      ?.tables.filter(tb => tb.name === canvas.table)[0]
      ?.fields.filter(fd => fd.name === object.field)[0].value;
    return text
      ? {
          ...object,
          name: text
        }
      : object;
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
            key={object.id}
          >
            <Textbox textBox={textBox(object)} />
          </LabelWrapper>
        ))}
      {canvas.rectangles &&
        canvas.rectangles.map(object => (
          <LabelWrapper
            x={object.x * 100}
            y={object.y * 100}
            width={object.width * 100}
            height={object.height * 100}
            key={object.id}
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
            key={object.id}
          >
            <Barcode barcode={object} />
          </LabelWrapper>
        ))}
    </div>
  );
}

export default PdfLabel;
