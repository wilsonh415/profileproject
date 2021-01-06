import React from 'react';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Game from '../components/projectComponents/Game';

configure({ adapter: new Adapter() });

test('Game components renders properly', () => {
    const component = renderer.create(<Game></Game>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Title is correct', () => {
    const component = shallow(<Game></Game>);
    let title = component.find('h2').text();
    expect(title).toEqual("Minesweeper");
});

// test('Generate grid for minesweeper', () => {
//     const component = renderer.create(<Game></Game>);
//     let tree = component.toJSON();
//     let grid = tree.props.createGrid();
//     expect(grid.length).toEqual(10);
// });