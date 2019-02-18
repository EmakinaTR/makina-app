import * as React from 'react'
import { mount } from 'enzyme'
import { ProfileList } from '../profile/ProfileList'

describe('<ProfileList />', () => {
  it('renders successfully', () => {
    const component = mount(<ProfileList />)
    expect(component).toBeTruthy()
  })
})
