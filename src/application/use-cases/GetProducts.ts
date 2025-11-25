import type { Product } from "@domain/models/Product"
import type { ProductRepository } from "@domain/repositories/ProductRepository"

export class GetProducts {
  private readonly productRepository: ProductRepository

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async execute(): Promise<Product[]> {
    return this.productRepository.getAll()
  }
}
