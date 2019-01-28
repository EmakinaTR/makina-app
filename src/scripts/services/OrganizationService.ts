import * as faker from 'faker'
import { Place } from '../models/Place'
import { Organization } from '../models/Organization'
import { DataService } from './DataService' // eslint-disable-line no-unused-vars

/**
 * Organization Service with mock data from faker
 * @class
 */
class OrganizationService implements DataService<Organization> {
  private organizations: Organization[]

  constructor () {
    this.organizations = []
    this.createOrganizations()
  }

  public getAll (): Organization[] {
    return this.organizations
  }

  public getById (id: number): Organization {
    const organization = this.organizations.find(o => o.id === id)
    if (!organization) {
      throw new Error('Organization not found')
    }
    return organization
  }

  public getBy (skip: number, take: number): Organization[] {
    if (skip < 0 || take < 0) {
      throw new Error('values must be bigger than zero.')
    }
    return this.organizations.slice(skip, take)
  }

  public create (organization: Organization): Organization {
    this.organizations.push(organization)
    return organization
  }

  public update (organization: Organization): Organization {
    const idx = this.organizations.findIndex(p => p.id === organization.id)
    organization.updatedAt = new Date()
    this.organizations[idx] = organization
    return organization
  }

  public deleteById (id: number) {
    if (id < 0) {
      throw new Error('id must be bigger than zero')
    }

    const idx = this.organizations.findIndex(o => o.id === id)
    if (idx) {
      this.organizations.splice(idx, 1)
    }
  }

  private createOrganizations () {
    let organization: Organization
    for (let i = 0; i < 50; i++) {
      organization = new Organization()
      organization.id = i
      organization.name = faker.name.findName()
      organization.address = faker.address.country()
      organization.phone = faker.phone.phoneNumber()
      organization.placeId = i
      organization.place = new Place()
      organization.place.name = faker.address.city()
      this.create(organization)
    }
  }
}

export default new OrganizationService()
