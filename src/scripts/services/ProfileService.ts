import { Profile } from '../models/Profile'
import * as faker from 'faker'
import { Place } from '../models/Place'
import { DataService } from './DataService' // eslint-disable-line no-unused-vars

/**
 * Profile Service with mock data from faker
 * @class
 */
class ProfileService implements DataService<Profile> {
  private profiles: Profile[] = []

  constructor () {
    this.profiles = []
    this.createProfiles()
  }

  public getAll (): Profile[] {
    return this.profiles
  }

  public getById (id: number): Profile {
    if (id < 0) {
      throw new Error('id must be bigger than zero')
    }

    const profile = this.profiles.find(p => p.id === id)
    if (!profile) {
      throw new Error('Profile not found')
    }
    return profile
  }

  public getBy (skip: number, take: number): Profile[] {
    if (skip < 0 || take < 0) {
      throw new Error('values must be bigger than zero.')
    }
    return this.profiles.slice(skip, take)
  }

  public create (profile: Profile): Profile {
    this.profiles.push(profile)
    return profile
  }

  public update (profile: Profile): Profile {
    const idx = this.profiles.findIndex(p => p.id === profile.id)
    if (idx < 0) {
      throw new Error('Profile not found')
    }

    profile.updatedAt = new Date()
    this.profiles[idx] = profile
    return profile
  }

  public deleteById (id: number) {
    if (id < 0) {
      throw new Error('id must be bigger than zero')
    }

    const idx = this.profiles.findIndex(p => p.id === id)
    if (idx >= 0) {
      this.profiles.splice(idx, 1)
    }
  }

  private createProfiles () {
    let profile: Profile
    for (let i = 0; i < 50; i++) {
      profile = new Profile()
      profile.id = i
      profile.email = faker.internet.email()
      profile.firstName = faker.name.findName()
      profile.lastName = faker.name.findName()
      profile.address = faker.address.country()
      profile.phone = faker.phone.phoneNumber()
      profile.birthDate = faker.date.past(20)
      profile.placeId = i
      profile.place = new Place()
      profile.place.name = faker.address.city()
      this.create(profile)
    }
  }
}

export default new ProfileService()
