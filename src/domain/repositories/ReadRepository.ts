export interface ReadRepository<T> {
  getAll(): Promise<T[]>
  getById(id: number): Promise<T | null>
}
