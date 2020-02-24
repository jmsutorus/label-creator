import React from 'react';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import RectangleForm from '../RectangleForm';
import store from '../../../../store/create';
import AppProvider from '../../../../contexts/AppProvider';
import FormInput from '../../FormInput';

Enzyme.configure({ adapter: new Adapter() });

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

describe('<RectangleForm />', () => {
  it('renders five <FormLabel /> components', () => {
    const mountWrapper = Enzyme.mount(
      <AppProvider store={store}>
        <RectangleForm rectangle={rectangle} />
      </AppProvider>
    );
    expect(mountWrapper.find(FormInput)).to.have.lengthOf(5);
  });
});
