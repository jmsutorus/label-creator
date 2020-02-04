import React from 'react';
import { render } from '@testing-library/react';
import CanvasForm from '../CanvasForm';
import initialize from '../../../../../initialize';
import store from '../../../../store/create';
import AppProvider from '../../../../contexts/AppProvider';

test('renders form', () => {
  initialize({ store });
  const { getByPlaceholderText } = render(
    <AppProvider store={store}>
      <CanvasForm />
    </AppProvider>
  );
  const nameElement = getByPlaceholderText(/name/i);
  const descriptionElement = getByPlaceholderText(/description/i);
  const heightElement = getByPlaceholderText(/200/i);
  const widthElement = getByPlaceholderText(/100/i);
  expect(nameElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(heightElement).toBeInTheDocument();
  expect(widthElement).toBeInTheDocument();
});
