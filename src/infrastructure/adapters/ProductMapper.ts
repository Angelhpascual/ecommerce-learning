import type { Product } from "@domain/models/Product"
import { Price } from "@domain/value-objects/Price"
import type { ProductDTO } from "@infrastructure/api/dtos/ProductDTO"

export const ProductMapper = {
  toDomain(dto: ProductDTO): Product {
    return {
      id: dto.id,
      title: dto.title,
      price: Price.create(dto.price),
      description: dto.description,
      category: dto.category,
      image: dto.image,
    }
  },
}
