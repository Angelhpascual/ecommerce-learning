import type { Product } from "@domain/models/Product"
import type { ProductRepository } from "@domain/repositories/ProductRepository"
import { ProductMapper } from "@infrastructure/adapters/ProductMapper"

export class FakeStoreApiProductRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    try {
      const response = await fetch("https://fakestoreapi.com/products")

      if (!response.ok) {
        throw new Error("Failed to fetch products")
      }

      const data = await response.json()

      return data.map(ProductMapper.toDomain)
    } catch (error) {
      console.error("Error fetching products:", error)
      return []
    }
  }

  async getById(id: number): Promise<Product | null> {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      if (!response.ok) {
        throw new Error("Failed to fetch product")
      }

      const data = await response.json()

      return ProductMapper.toDomain(data)
    } catch (error) {
      console.error("Error fetching product:", error)
      return null
    }
  }
}
