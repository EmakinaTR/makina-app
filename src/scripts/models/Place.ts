import { BaseEntry } from './BaseEntry'

export enum PlaceType {
  'country', 'state', 'region', 'city', 'district'
}

export class Place extends BaseEntry {
  name: string | null = null
  type: PlaceType | null = PlaceType.city
}
