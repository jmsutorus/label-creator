import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import initialize from '../../../../../initialize';
import store from '../../../../store/create';
import AppProvider from '../../../../contexts/AppProvider';
import Home from '../Home';

test('renders header and footer', () => {
  initialize({ store });
  const { getByTitle } = render(
    <AppProvider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </AppProvider>
  );
  const headerElement = getByTitle(/header/i);
  const footerElement = getByTitle(/footer/i);
  const canvasElement = getByTitle(/canvas/i);
  const labelFormsElement = getByTitle(/labelForms/i);
  expect(headerElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
  expect(canvasElement).toBeInTheDocument();
  expect(labelFormsElement).toBeInTheDocument();
});
