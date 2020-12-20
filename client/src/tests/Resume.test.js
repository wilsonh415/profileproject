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