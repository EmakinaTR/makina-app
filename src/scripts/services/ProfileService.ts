import { Profile } from '../models/Profile'
import * as faker from 'faker'
import { Place } from '../models/Place'

/**
 * Profile Service with mock data from faker
 * @class
 */
class ProfileService {
  private profiles: Profile[] = []

  constructor () {
    this.generateProfiles()
  }

  public getProfileById (id: number): Profile | undefined {
    return this.profiles.find(p => p.id === id)
  }

  public getProfiles (): Profile[] | undefined {
    return this.profiles
  }

  public saveProfile (profile: Profile): Profile {
    this.profiles.push(profile)
    return profile
  }

  public updateProfile (profile: Profile): Profile {
    const idx = this.profiles.findIndex(p => p.id === profile.id)
    profile.updatedAt = new Date()
    this.profiles[idx] = profile
    return profile
  }

  public deleteProfile (id: number) {
    const idx = this.profiles.findIndex(p => p.id === id)
    if (idx) {
      this.profiles.splice(idx, 1)
    }
  }

  private generateProfiles () {
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
      this.profiles.push(profile)
    }
  }
}

export default new ProfileService()
