import React from 'react';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Resume from '../components/Resume';
import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });


test('Resume component renders correctly', () => {
    const component = renderer.create(<Resume></Resume>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Correct headers', () => {
    const component = shallow(<Resume></Resume>);
    let titles = component.find('h2');
    // two titles, one for Education, other for Exprience
    expect(titles.length).toEqual(2);
});