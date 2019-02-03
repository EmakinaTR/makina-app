export interface DataService<T> {

    getAll(): T[]
    getById(id: number): T
    getBy(skip: number, take: number): T[]
    create(t: T): T
    update(t: T): T
    deleteById(id: number): void
}
