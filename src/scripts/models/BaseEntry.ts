import { BaseEntity } from './BaseEntity'

export abstract class BaseEntry extends BaseEntity {
  createdAt: Date | null = new Date()
  updatedAt: Date | null = null
}
