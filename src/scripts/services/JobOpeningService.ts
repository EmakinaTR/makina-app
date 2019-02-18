import * as faker from 'faker'
import { JobOpening, ExperienceLevel, JobOpeningState } from '../models/JobOpening'
import { DataServiceImpl } from './DataServiceImpl' // eslint-disable-line no-unused-vars
import { getRandomItemFromArr } from './Utils'

/**
 * JobOpening Service with mock data from faker
 * @class
 */
class JobOpeningService extends DataServiceImpl<JobOpening> {
  createItem () {
    let item = new JobOpening()
    item.id = faker.random.number(9999999)
    item.title = getRandomItemFromArr(['.NET Developer', 'Front-end Developer', 'Financal Controller', 'JAVA Developer'])
    item.content = faker.lorem.sentences(4)
    item.experience = getRandomItemFromArr(Object.keys(ExperienceLevel).filter((key: any) => isNaN(key)))
    item.state = getRandomItemFromArr(Object.keys(JobOpeningState).filter((key: any) => isNaN(key)))
    item.expiresAt = faker.date.future(1)
    return item
  }
}

export default new JobOpeningService()
