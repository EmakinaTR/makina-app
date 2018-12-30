import * as React from 'react'
import { shallow } from 'enzyme'
import Application from '../Application'

describe('<Application />', () => {
  it('renders successfully', () => {
    const component = shallow(<Application />)
    expect(component).toMatchSnapshot()
  })
})
