import * as faker from 'faker'
import { JobAssessment } from '../models/JobAssessment'
import { DataServiceImpl } from './DataServiceImpl' // eslint-disable-line no-unused-vars
import { getRandomItemFromArr } from './Utils'

/**
 * JobAssessment Service with mock data from faker
 * @class
 */
class JobAssessmentService extends DataServiceImpl<JobAssessment> {
  createItem () {
    let item = new JobAssessment()
    item.title = getRandomItemFromArr(['English Assessment', 'JAVA Assessment', 'Financial Assessment'])
    item.content = faker.lorem.sentences(2)
    return item
  }
}

export default new JobAssessmentService()
