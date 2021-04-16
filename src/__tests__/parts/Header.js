import Header from '../../parts/Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
  it('renders header', () => {
    const wrapper = shallow(<Header />);
    const header = wrapper.find('.header');
    expect(header.length).toBe(1);
  });
  it('renders logo container', () => {
    const wrapper = shallow(<Header />);
    const logoContainer = wrapper.find('.logo-container');
    expect(logoContainer.length).toBe(1);
  });
  it('renders star wars logo', () => {
    const wrapper = shallow(<Header />);
    const logo = wrapper.find('.star-wars-logo');
    expect(logo.length).toBe(1);
  });
});
