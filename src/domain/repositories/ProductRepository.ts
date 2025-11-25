import type { Product } from "@domain/models/Product"
import type { ReadRepository } from "./ReadRepository"

export interface ProductRepository extends ReadRepository<Product> {}
