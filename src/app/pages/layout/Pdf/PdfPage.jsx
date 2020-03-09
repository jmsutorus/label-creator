import React, { useState, useRef } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Pdf from 'react-to-pdf';
import Header from '../Header';
import PdfLabel from '../../../components/PdfLabel';
import './PdfPage.scss';

function PdfPage() {
  const canvas = useSelector(state => state.CanvasReducer.canvas);
  const labels = useSelector(state => state.LabelReducer.labelResults);
  const databases = useSelector(state => state.DatabaseReducer.databaseResults);
  const refs = useRef([]);
  const buttonRefs = useRef([]);
  const params = useParams();

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

  const labelsPerRow = () => {
    return Math.floor(860 / (label().width * 100 + (16 + 1 + 6)));
  };

  const labelsPerColumn = () => {
    return Math.floor(1100 / (label().height * 100 + (16 + 1 + 6)));
  };

  const getLabelPerPage = () => {
    let numLabels = 0;
    while (numLabels < labelsPerRow() * labelsPerColumn()) {
      numLabels += 1;
    }
    return numLabels;
  };

  const getRowsData = () => {
    return databases
      ?.filter(db => db.name === label().database)[0]
      ?.tables.filter(tb => tb.name === label().table)[0]?.rows;
  };

  const getPagesData = () => {
    const pages = [];
    let currentPage = [];
    const numPerPage = getLabelPerPage();
    const rows = getRowsData() ? getRowsData() : [];
    rows.forEach(row => {
      if (currentPage.length < numPerPage) {
        currentPage.push(row);
      } else {
        pages.push(currentPage);
        currentPage = [];
        currentPage.push(row);
      }
    });
    pages.push(currentPage);
    refs.current = Array(pages.length)
      .fill()
      .map((_, i) => refs.current[i] || React.createRef());
    buttonRefs.current = Array(pages.length)
      .fill()
      .map((_, i) => buttonRefs.current[i] || React.createRef());
    return pages;
  };

  const getRows = page => {
    const rows = [];
    page.forEach(row => {
      rows.push(<PdfLabel key={row.name} row={row} label={label()} />);
    });
    return rows;
  };

  const getPages = () => {
    const formattedPages = [];
    let pageKey = 0;
    getPagesData().forEach(page => {
      const rows = getRows(page);
      const fileName = `${pageKey + 1}_labels.pdf`;
      formattedPages.push(
        <div key={pageKey}>
          <Pdf
            targetRef={refs.current[pageKey]}
            filename={fileName}
            ref={buttonRefs.current[pageKey]}
          >
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
            <div ref={refs.current[pageKey]} style={{ width: '100%', height: '100%' }}>
              {rows}
            </div>
          </div>
        </div>
      );
      pageKey += 1;
    });
    return formattedPages;
  };

  const pages = useState(() => {
    return getPages();
  });

  const downloadPDFs = () => {
    buttonRefs.current.forEach(nextRef => {
      nextRef.current.toPdf();
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <button className="label-button" onClick={downloadPDFs} type="button">
        Download All
      </button>
      <div>{pages}</div>
    </div>
  );
}

export default PdfPage;
