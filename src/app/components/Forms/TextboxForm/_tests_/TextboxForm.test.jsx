import React from 'react';
import { render } from '@testing-library/react';
import TextboxForm from '../TextboxForm';
import initialize from '../../../../../initialize';
import store from '../../../../store/create';
import AppProvider from '../../../../contexts/AppProvider';

const textBox = {
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
      <TextboxForm textBox={textBox} />
    </AppProvider>
  );
  const nameElement = getByPlaceholderText(/name/i);
  const xElement = getByPlaceholderText(/24/i);
  const yElement = getByPlaceholderText(/12/i);
  const heightElement = getByPlaceholderText(/100/i);
  const widthElement = getByPlaceholderText(/200/i);
  const fontSizeElement = getByPlaceholderText(/18/i);
  const rotationElement = getByPlaceholderText(/90/i);
  expect(nameElement).toBeInTheDocument();
  expect(xElement).toBeInTheDocument();
  expect(yElement).toBeInTheDocument();
  expect(heightElement).toBeInTheDocument();
  expect(widthElement).toBeInTheDocument();
  expect(fontSizeElement).toBeInTheDocument();
  expect(rotationElement).toBeInTheDocument();
});
