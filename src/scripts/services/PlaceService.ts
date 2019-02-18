import * as faker from 'faker'
import { Place } from '../models/Place'
import { DataServiceImpl } from './DataServiceImpl' // eslint-disable-line no-unused-vars

/**
 * Place Service with mock data from faker
 * @class
 */
class PlaceService extends DataServiceImpl<Place> {
  createItem () {
    let place = new Place()
    place.id = faker.random.number(9999999)
    place.name = faker.address.city()
    return place
  }
}

export default new PlaceService()
