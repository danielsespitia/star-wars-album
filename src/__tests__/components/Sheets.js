import Sheets from '../../components/Sheets';
import { shallow } from 'enzyme';

describe('Sheets', () => {
  it('renders without crashing', () => {
    shallow(<Sheets />);
  });
});