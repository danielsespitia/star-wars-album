import Sheets from '../../components/Sheets';
import { TitleButton } from '../../assets/styles/SheetsStyles';
import { shallow, render, mount } from 'enzyme';
import store from '../../store';

describe('Sheets', () => {
  it('renders without crashing', () => {
    shallow(<Sheets />);
  });
  it('renders sheets container', () => {
    const wrapper = shallow(<Sheets />);
    const albumContainer = wrapper.find('.sheets-container');
    expect(albumContainer.length).toBe(1);
  });
  it('renders type header', () => {
    const wrapper = shallow(<Sheets />);
    const typeHeader = wrapper.find('.type-header');
    expect(typeHeader.length).toBe(1);
  });
  it('renders name button', () => {
    const wrapper = shallow(<Sheets />);
    const nameButton = wrapper.find('.name-button');
    expect(nameButton.length).toBe(1);
  });
  it('should render type name in name button', () => {
    const wrapper = render(<Sheets name={'Films'} />);
    const name = wrapper.find('.name-button').text();

    expect(name).toBe('Films');
  });
  it('should render plus icon and then minus icon when button is pressed', () => {
    const wrapper = shallow(<Sheets />);
    const button = wrapper.find('.name-button');
    const plusIcon = wrapper.find('.plus-icon');

    expect(plusIcon.length).toBe(1);

    button.simulate('click');

    const minusIcon = wrapper.find('.minus-icon');
    expect(minusIcon.length).toBe(1);
  });
  it('should render "obtener" button when name button is pressed', () => {
    const wrapper = shallow(<Sheets />);
    const button = wrapper.find('.name-button');

    button.simulate('click');

    const getButton = wrapper.find('.get-button');

    expect(getButton.exists()).toBe(true);
  });
});
