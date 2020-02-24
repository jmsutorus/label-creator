import React from 'react';
import { useSelector } from 'react-redux';
import Pdf from 'react-to-pdf';
import Header from '../Header';
import PdfLabel from '../../../components/PdfLabel';
import './PdfPage.scss';

function PdfPage() {
  const canvas = useSelector(state => state.CanvasReducer.canvas);
  const ref = React.createRef();

  const style = {
    height: '1100px',
    width: '860px',
    position: 'relative',
    margin: '0 auto 32px auto'
  };

  const labelsPerRow = () => {
    return Math.floor(860 / (canvas.width * 100 + (16 + 1 + 6)));
  };

  const labelsPerColumn = () => {
    return Math.floor(1100 / (canvas.height * 100 + (16 + 1 + 6)));
  };

  const getLabels = () => {
    const labels = [];
    while (labels.length < labelsPerRow() * labelsPerColumn()) {
      labels.push(<PdfLabel key={labels.length} />);
    }
    return labels;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Pdf targetRef={ref} filename="label.pdf">
        {({ toPdf }) => (
          <button
            className="label-button"
            type="button"
            style={{ margin: '12px auto' }}
            onClick={toPdf}
          >
            Generate PDF
          </button>
        )}
      </Pdf>
      <div style={style} className="pdf-page">
        <div ref={ref} style={{ width: '100%', height: '100%' }}>
          {getLabels()}
        </div>
      </div>
    </div>
  );
}

export default PdfPage;
