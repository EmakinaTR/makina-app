import { BaseEntry } from './BaseEntry'

export class Place extends BaseEntry {
  name: string | null = null
  type: 'country' | 'state' | 'region' | 'city' | 'district' = 'city'
}
