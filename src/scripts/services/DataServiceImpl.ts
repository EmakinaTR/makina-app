import { DataService } from './DataService' // eslint-disable-line no-unused-vars

/**
 * DataService implementation
 * @class
 */
export abstract class DataServiceImpl<BaseEntry> implements DataService<BaseEntry> {
  protected itemCount = 50
  private items: BaseEntry[]

  constructor () {
    this.items = []
    this.createItems()
  }

  abstract createItem (): BaseEntry

  private createItems () {
    for (let i = 0; i < this.itemCount; i++) {
      this.create(this.createItem())
    }
  }

  public getAll (): BaseEntry[] {
    return this.items
  }

  public getById (id: number): BaseEntry {
    const item = this.items.find((o: any): boolean => {
      return o.id === id
    })
    if (!item) {
      throw new Error('Item not found')
    }
    return item
  }

  public getBy (skip: number, take: number): BaseEntry[] {
    if (skip < 0 || take < 0) {
      throw new Error(`skip(${skip}) and take(${take}) must be bigger than zero.`)
    }
    return this.items.slice(skip, take)
  }

  public create (item: BaseEntry): BaseEntry {
    this.items.push(item)
    return item
  }

  public update (item: BaseEntry): BaseEntry {
    const idx = this.items.findIndex((p: any) => {
      return p.id === (item as any).id
    })
    if (idx < 0) {
      throw new Error('Profile not found')
    }

    (item as any).updatedAt = new Date()
    this.items[idx] = item
    return item
  }

  public deleteById (id: number) {
    if (id < 0) {
      throw new Error(`id(${id}) must be bigger than zero`)
    }

    const idx = this.items.findIndex((o: any): boolean => {
      return o.id === id
    })
    if (idx < 0) {
      throw new Error('Profile not found')
    }

    this.items.splice(idx, 1)
  }
}
