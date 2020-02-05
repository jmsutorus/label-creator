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
  height: 1,
  rotate: 0
};

test('renders form', () => {
  initialize({ store });
  const { getByPlaceholderText } = render(
    <AppProvider store={store}>
      <TextboxForm textBox={textBox} />
    </AppProvider>
  );
  const nameElement = getByPlaceholderText(/name/i);
  expect(nameElement).toBeInTheDocument();
});
