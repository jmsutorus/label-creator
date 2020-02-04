import React from 'react';
import { render } from '@testing-library/react';
import RectangleForm from '../RectangleForm';
import initialize from '../../../../../initialize';
import store from '../../../../store/create';
import AppProvider from '../../../../contexts/AppProvider';

const rectangle = {
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
      <RectangleForm rectangle={rectangle} />
    </AppProvider>
  );
  const nameElement = getByPlaceholderText(/name/i);
  const xElement = getByPlaceholderText(/12/i);
  const yElement = getByPlaceholderText(/24/i);
  const heightElement = getByPlaceholderText(/100/i);
  const widthElement = getByPlaceholderText(/200/i);
  expect(nameElement).toBeInTheDocument();
  expect(xElement).toBeInTheDocument();
  expect(yElement).toBeInTheDocument();
  expect(heightElement).toBeInTheDocument();
  expect(widthElement).toBeInTheDocument();
});
