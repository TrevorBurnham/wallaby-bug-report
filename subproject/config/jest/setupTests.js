import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
