import Header from '../../parts/Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
  it('renders header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header').length).toBe(1);
  });
  it('renders logo container', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.logo-container').length).toBe(1);
  });
  it('renders star wars logo', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.star-wars-logo').length).toBe(1);
  });
});
