import React from 'react';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Random from '../components/Random';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

test('Random page rendered properly', () => {
    const component = renderer.create(<Random></Random>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Correct titles on Random component', () => {
    const component = shallow(<Random></Random>);
    let title = component.find('h3').text();
    expect(title).toEqual("Favorite Albums");
});