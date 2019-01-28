import { BaseEntry } from './BaseEntry'
import { Place } from './Place' // eslint-disable-line no-unused-vars

export class Organization extends BaseEntry {
  name: string | null = null
  type: 'business' | 'government' | 'other' = 'business'
  address: string | null = null
  phone: string | null = null
  placeId: number | null = null
  place: Place | null = null
}
