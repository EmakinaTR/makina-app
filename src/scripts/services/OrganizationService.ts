import * as faker from 'faker'
import { Organization } from '../models/Organization'
import * as PlaceService from './PlaceService'
import { DataServiceImpl } from './DataServiceImpl' // eslint-disable-line no-unused-vars

/**
 * Organization Service with mock data from faker
 * @class
 */
class OrganizationService extends DataServiceImpl<Organization> {
  createItem () {
    let organization = new Organization()
    organization.id = faker.random.number(9999999)
    organization.name = faker.name.findName()
    organization.address = faker.address.streetAddress()
    organization.phone = faker.phone.phoneNumber()
    organization.place = PlaceService.default.createItem()
    return organization
  }
}

export default new OrganizationService()
