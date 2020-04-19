import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Pdf from 'react-to-pdf';
import Header from '../Header';
import PdfLabel from '../../../components/PdfLabel';
import './PdfPage.scss';

function PdfPage() {
  const canvas = useSelector(state => state.CanvasReducer.canvas);
  const labels = useSelector(state => state.LabelReducer.labelResults);
  const params = useParams();
  const ref = React.createRef();

  const label = () => {
    return labels.filter(l => l.id === params.id)[0]
      ? labels.filter(l => l.id === params.id)[0]
      : canvas;
  };

  const style = {
    height: '1100px',
    width: '860px',
    position: 'relative',
    margin: '0 auto 32px auto'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div>
        <Pdf targetRef={ref} filename="div-blue.pdf">
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
            <PdfLabel key="row" row="row" label={label()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfPage;
