import App from '../App';
import Header from '../parts/Header';
import Album from '../pages/Album';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders header', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find(Header);
    expect(header.exists()).toBe(true);
  });
  it('renders div', () => {
    const wrapper = shallow(<App />);
    const div = wrapper.find('div');
    expect(div.length).toBe(1);
  });
  it('renders album', () => {
    const wrapper = shallow(<App />);
    const album = wrapper.find(Album);
    expect(album.exists()).toBe(true);
  });
});
