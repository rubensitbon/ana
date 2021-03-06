// @flow
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import GoogleMapComponent from './GoogleMapComponent';

/*
Snapshot tests allow you to easily lock the comportment of a component.
Given props, it renders the component and compares it to the saved snapshot.
*/
describe('[Snapshot] <GoogleMapComponent />', () => {
  it('should render a button with a label', () => {
    const props = {
    };
    const wrapper = shallow(<GoogleMapComponent {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
