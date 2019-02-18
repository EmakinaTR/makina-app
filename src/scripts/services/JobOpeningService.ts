import * as faker from 'faker'
import { JobOpening } from '../models/JobOpening'
import { DataServiceImpl } from './DataServiceImpl' // eslint-disable-line no-unused-vars
import { getRandomItemFromArr } from './Utils'

/**
 * JobOpening Service with mock data from faker
 * @class
 */
class JobOpeningService extends DataServiceImpl<JobOpening> {
  protected createItems () {
    let item: JobOpening
    for (let i = 0; i < 5; i++) {
      item = new JobOpening()
      item.id = i
      item.title = getRandomItemFromArr(['.NET Developer', 'Front-end Developer', 'Financal Controller', 'JAVA Developer'])
      item.content = faker.lorem.sentences(4)
      item.experience = getRandomItemFromArr(['junior_level', 'mid_level', 'senior_level'])
      item.state = getRandomItemFromArr(['draft', 'pending_review', 'approved', 'rejected', 'published'])
      item.expiresAt = faker.date.future(1)
      this.create(item)
    }
  }
}

export default new JobOpeningService()
