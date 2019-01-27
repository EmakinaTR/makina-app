import * as faker from 'faker'
import { Place } from '../models/Place'
import { Organization } from '../models/Organization'

/**
 * Organization Service with mock data from faker
 * @class
 */
class OrganizationService {
  private organizations : Organization []

  constructor () {
    this.organizations = []
    this.generateOrganizations()
  }

  public getOrganizationById (id:number): Organization | undefined {
    return this.organizations.find(o => o.id === id)
  }

  public getOrganizations (): Organization[] {
    return this.organizations
  }

  public addOrganization (organization : Organization) : Organization {
    this.organizations.push(organization)
    return organization
  }

  public updateOrganization (organization: Organization): Organization {
    const idx = this.organizations.findIndex(p => p.id === organization.id)
    organization.updatedAt = new Date()
    this.organizations[idx] = organization
    return organization
  }

  public deleteOrganizationById (id:number) {
    const idx = this.organizations.findIndex(o => o.id === id)
    if (idx) {
      this.organizations.splice(idx, 1)
    }
  }

  private generateOrganizations () {
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
      this.organizations.push(organization)
    }
  }
}

export default new OrganizationService()
