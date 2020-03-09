import React from 'react';
import PropTypes from 'prop-types';
import Rectangle from '../LabelObjects/Rectangle';
import Textbox from '../LabelObjects/Textbox';
import Barcode from '../LabelObjects/Barcode';
import LabelWrapper from '../LabelWrapper';
import './PdfLabel.scss';

const propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string,
    fields: PropTypes.array
  }).isRequired,
  label: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    upc: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    textboxes: PropTypes.array,
    rectangles: PropTypes.number.array,
    barcodes: PropTypes.number.array,
    width: PropTypes.number,
    height: PropTypes.number,
    database: PropTypes.string,
    table: PropTypes.string
  }).isRequired
};

const defaultProps = {};

function PdfLabel({ row, label }) {
  const style = {
    height: `${label.height * 100}px`,
    width: `${label.width * 100}px`
  };

  const textBox = object => {
    const text = row?.fields.filter(fd => fd.name === object.field)[0]?.value;
    return text
      ? {
          ...object,
          name: text
        }
      : object;
  };

  const barcode = object => {
    const text = row?.fields.filter(fd => fd.name === object.field)[0]?.value;
    return text
      ? {
          ...object,
          name: text
        }
      : object;
  };

  return (
    <div style={style} className="pdfLabel">
      {label.textboxes &&
        label.textboxes.map(object => (
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
      {label.rectangles &&
        label.rectangles.map(object => (
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
      {label.barcodes &&
        label.barcodes.map(object => (
          <LabelWrapper
            x={object.x * 100}
            y={object.y * 100}
            width={object.width * 100}
            height={object.height * 100}
            key={object.id}
          >
            <Barcode barcode={barcode(object)} />
          </LabelWrapper>
        ))}
    </div>
  );
}

PdfLabel.propTypes = propTypes;
PdfLabel.defaultProps = defaultProps;

export default PdfLabel;
