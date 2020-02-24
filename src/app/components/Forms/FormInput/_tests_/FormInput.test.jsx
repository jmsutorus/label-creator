import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import initialize from '../../../../../initialize';
import store from '../../../../store/create';
import FormInput from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('<RectangleForm />', () => {
  it('should call on change', () => {
    const handleChange = jest.fn();
    initialize({ store });
    const mountWrapper = Enzyme.mount(
      <FormInput id="id" name="name" value="value" type="text" onChange={handleChange} />
    );
    mountWrapper.find('input').simulate('change');
    expect(handleChange).toBeCalledWith('id', 'value');
  });
});
