import * as React from 'react'
import { mount } from 'enzyme'
import { OrganizationList } from '../organization/OrganizationList'

describe('<OrganizationList />', () => {
  it('renders successfully', () => {
    const component = mount(<OrganizationList />)
    expect(component).toBeTruthy()
  })
})
