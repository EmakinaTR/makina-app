import { Profile } from '../models/Profile'
import * as faker from 'faker'
import * as PlaceService from './PlaceService'
import { DataServiceImpl } from './DataServiceImpl'

/**
 * Profile Service with mock data from faker
 * @class
 */
class ProfileService extends DataServiceImpl<Profile> {
  createItem () {
    let profile = new Profile()
    profile.id = faker.random.number(9999999)
    profile.email = faker.internet.email()
    profile.firstName = faker.name.findName()
    profile.lastName = faker.name.findName()
    profile.address = faker.address.country()
    profile.phone = faker.phone.phoneNumber()
    profile.birthDate = faker.date.past(20)
    profile.place = PlaceService.default.createItem()
    return profile
  }
}

export default new ProfileService()
