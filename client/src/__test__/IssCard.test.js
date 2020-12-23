import React from 'react';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import IssCard from '../components/projectComponents/IssCard';

configure({ adapter: new Adapter() });

test('IssCard component rendered properly', () => {
    const component = renderer.create(<IssCard></IssCard>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('ISS button text is correct', () => {
    const component = shallow(<IssCard></IssCard>);
    let buttonText = component.find('Button').text();
    expect(buttonText).toEqual("Locate ISS!");
});
