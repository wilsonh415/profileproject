import React from 'react';
import Bio from '../components/Bio';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

test("Bio component renders properly", () => {
    const component = shallow(<Bio></Bio>);
    expect(JSON.stringify(component)).toMatchSnapshot();
});

test('Name in Bio component is correct', () => {
    const component = shallow(<Bio></Bio>);
    const name = component.find("h3").text();
    expect(name).toEqual("Wilson Huang");
});
