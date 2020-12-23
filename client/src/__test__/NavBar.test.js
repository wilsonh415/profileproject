import React from 'react';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../components/NavbarComp';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

test('Navbar component rendered properly', () => {
    const component = renderer.create(<Navbar></Navbar>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});