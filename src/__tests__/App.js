import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toBe(1);
  });
  it('renders div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toBe(1);
  });
  it('renders album', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Album').length).toBe(1);
  });
});
