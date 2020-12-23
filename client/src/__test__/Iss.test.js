import React from 'react';
import Iss from '../components/projectComponents/Iss';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

// snapshot test
test('ISS component rendered properly', () => {
    const component = renderer.create(
        <Iss></Iss>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Title is correct', () => {
    const component = shallow(<Iss></Iss>);
    const title = <h3><b>Where is the International Space Station (ISS) right now?</b></h3>
    expect(component.contains(title)).toEqual(true);
});