import { BaseEntry } from './BaseEntry'
import { Place } from './Place'

export class Profile extends BaseEntry {
  email: string | null = null
  firstName: string | null = null
  lastName: string | null = null
  birthDate: Date | null = null
  address: string | null = null
  phone: string | null = null
  placeId: number | null = null
  place: Place | null = null
}
