import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Pics from '../components/randomComponents/Pics';

configure({adapter: new Adapter()});

test('Pics components rendered properly', () => {
    const component = renderer.create(<Pics></Pics>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});