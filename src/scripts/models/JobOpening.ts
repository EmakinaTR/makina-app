import { BaseEntry } from './BaseEntry'
import { JobAssessment } from './JobAssessment' // eslint-disable-line no-unused-vars
import { OrganizationRole } from './OrganizationRole' // eslint-disable-line no-unused-vars

export enum JobOpeningType {
  'full_time',
  'part_time',
  'temporary',
  'contract',
  'intership',
  'commission',
  'other'
}

export enum ExperienceLevel {
  'junior_level',
  'mid_level',
  'senior_level',
  'other'
}

export enum JobOpeningState {
  'draft',
  'pending_review',
  'approved',
  'rejected',
  'published'
}

export class JobOpening extends BaseEntry {
  title: string | null = null
  content: string | null = null
  type: JobOpeningType | null = null
  experience: ExperienceLevel | null = null
  state: JobOpeningState | null = null
  expiresAt: Date | null = null
  jobAssessment: JobAssessment | null = null
  organizationRole: OrganizationRole | null = null
}
