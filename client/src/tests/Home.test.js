import React from 'react';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Home from '../components/Home';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

test('Home component renders properly', () => {
    const component = renderer.create(<Home></Home>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Title in home component is correct', () => {
    const component = shallow(<Home></Home>);
    const title = component.find("h1").text();
    expect(title).toEqual("Hi, I'm Wilson. Welcome to my website!");
});

