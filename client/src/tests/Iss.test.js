import React from 'react';
import IssCard from '../components/projectComponents/IssCard';
import renderer from 'react-test-renderer';

// snapshot test
test('ISS component properly rendered', () => {
    const component = renderer.create(
        <IssCard></IssCard>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});