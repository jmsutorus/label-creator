import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import BarcodeForm from '../BarcodeForm';
import initialize from '../../../../initialize';
import store from '../../../store/create';

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

test('renders header and footer', () => {
  initialize({ store });
  const { getByAltText } = render(<BarcodeForm store={store} barcode={barcode} />);
  const imgElement = getByAltText(/barcode/i);
  expect(imgElement).toBeInTheDocument();
});

Enzyme.configure({ adapter: new Adapter() });

describe('<NewPost />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.mount(Enzyme.shallow(<BarcodeForm store={store} barcode={barcode} />).get(0));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Name input', () => {
    it('Should capture name correctly onChange', () => {
      const name = wrapper.find('input').at(0);
      name.instance().value = 'Test';
      name.simulate('change');
      expect(setState).toHaveBeenCalledWith(barcode.name);
    });
  });
});
