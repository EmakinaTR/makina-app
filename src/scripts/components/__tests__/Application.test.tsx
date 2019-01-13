import * as React from 'react'
import { mount } from 'enzyme'
import Application from '../Application'

describe('<Application />', () => {
  it('renders successfully', () => {
    const component = mount(<Application />)
    expect(component).toBeTruthy()
  })
})
