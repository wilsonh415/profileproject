import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Minesweeper from '../components/projectComponents/Minesweeper';

configure({adapter: new Adapter()});

test('Minesweeper component rendererd properly', () => {
    const component = renderer.create(<Minesweeper></Minesweeper>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});