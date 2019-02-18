import { BaseEntry } from './BaseEntry'
import { JobOpening } from './JobOpening' // eslint-disable-line no-unused-vars
import { Profile } from './Profile' // eslint-disable-line no-unused-vars

export enum JobCandidateState {
  'missing_information', 'pending_review', 'pending_assessment', 'pending_approval', 'approved', 'declined', 'completed', 'canceled'
}

export class JobCandidate extends BaseEntry {
  state: JobCandidateState | null = null
  jobOpening: JobOpening | null = null
  profile: Profile | null = null
}
