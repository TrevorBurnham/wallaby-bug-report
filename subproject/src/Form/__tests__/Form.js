import Form from '../Form';
import React from 'react';
import { shallow } from 'enzyme';

describe('Form', () => {
  let tree;
  beforeEach(() => {
    tree = shallow(
      <Form className="custom">
        <input />
      </Form>
    );
  })

  it('passes className through', () => {
    expect(tree.hasClass('custom')).toBe(true)
  });

  it('matches the snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
