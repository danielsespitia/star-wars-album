import Album from '../../pages/Album';
import Sheets from '../../components/Sheets';
import { shallow } from 'enzyme';

import auth from '../../auth';

describe('Album', () => {
  it('renders without crashing', () => {
    shallow(<Album />);
  });
  it('renders album container div', () => {
    const wrapper = shallow(<Album />);
    expect(wrapper.find('.album-container').length).toBe(1);
  });
  // it('renders sheets', () => {
  //   const wrapper = shallow(<Album />);
  //   expect(wrapper.find('Sheets').props().name.length).toBe(1);
  // });
});
