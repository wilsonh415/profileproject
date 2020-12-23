import React from 'react';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Joke from '../components/projectComponents/Joke';

configure({ adapter: new Adapter() });

test('Joke component rendered properly', () => {
    const component = renderer.create(<Joke></Joke>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
