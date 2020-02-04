import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import initialize from '../../../../../initialize';
import store from '../../../../store/create';

test('renders header and footer', () => {
  initialize({ store });
  const { getByTitle } = render(<App store={store} />);
  const headerElement = getByTitle(/header/i);
  const footerElement = getByTitle(/footer/i);
  const toolsElement = getByTitle(/tools/i);
  const canvasElement = getByTitle(/canvas/i);
  const labelFormsElement = getByTitle(/labelForms/i);
  expect(headerElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
  expect(toolsElement).toBeInTheDocument();
  expect(canvasElement).toBeInTheDocument();
  expect(labelFormsElement).toBeInTheDocument();
});
