import React from 'react';
import { render } from '@testing-library/react';
import BarcodeForm from '../BarcodeForm';
import initialize from '../../../../../initialize';
import store from '../../../../store/create';
import AppProvider from '../../../../contexts/AppProvider';

const barcode = {
  id: 0,
  name: '',
  text: '',
  x: 1,
  y: 1,
  fontSize: 1,
  fontType: '',
  width: 1,
  height: 1
};

test('renders form', () => {
  initialize({ store });
  const { getByPlaceholderText } = render(
    <AppProvider store={store}>
      <BarcodeForm barcode={barcode} />
    </AppProvider>
  );
  const nameElement = getByPlaceholderText(/name/i);
  const xElement = getByPlaceholderText(/12/i);
  const yElement = getByPlaceholderText(/24/i);
  const heightElement = getByPlaceholderText(/100/i);
  const widthElement = getByPlaceholderText(/200/i);
  const rotationElement = getByPlaceholderText(/90/i);
  expect(nameElement).toBeInTheDocument();
  expect(xElement).toBeInTheDocument();
  expect(yElement).toBeInTheDocument();
  expect(heightElement).toBeInTheDocument();
  expect(widthElement).toBeInTheDocument();
  expect(rotationElement).toBeInTheDocument();
});
