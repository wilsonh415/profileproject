import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('App renders Bio', () => {
  const component = shallow(<App></App>);
});