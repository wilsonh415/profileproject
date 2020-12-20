import React from 'react';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Random from '../components/Random';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

test('Random page renders correctly', () => {
    const component = renderer.create(<Random></Random>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});