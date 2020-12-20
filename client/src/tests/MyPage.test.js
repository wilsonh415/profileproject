import React from 'react';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import MyPage from '../components/MyPage';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

test('MyPage component renders correctly', () => {
    const component = renderer.create(<MyPage></MyPage>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});