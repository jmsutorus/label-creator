import React from 'react';
import { render } from '@testing-library/react';
import Barcode from '../Barcode';
import initialize from '../../../../../initialize';
import store from '../../../../store/create';

test('renders image', () => {
  initialize({ store });
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
  const { getByAltText } = render(<Barcode store={store} barcode={barcode} />);
  const imgElement = getByAltText(/barcode/i);
  expect(imgElement).toBeInTheDocument();
});
