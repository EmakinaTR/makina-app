import * as faker from 'faker'
import { JobCandidate, JobCandidateState } from '../models/JobCandidate'
import * as JobOpeningService from './JobOpeningService'
import * as ProfileService from './ProfileService'
import { DataServiceImpl } from './DataServiceImpl' // eslint-disable-line no-unused-vars
import { getRandomItemFromArr } from './Utils'

/**
 * JobCandidate Service with mock data from faker
 * @class
 */
class JobCandidateService extends DataServiceImpl<JobCandidate> {
  createItem () {
    let item = new JobCandidate()
    item.id = faker.random.number(9999999)
    item.jobOpening = JobOpeningService.default.createItem()
    item.profile = ProfileService.default.createItem()
    item.state = getRandomItemFromArr(Object.keys(JobCandidateState).filter((key: any) => isNaN(key)))
    return item
  }
}

export default new JobCandidateService()
