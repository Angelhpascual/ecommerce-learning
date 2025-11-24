import type { Product } from "@domain/models/Product"
import type { ProductDTO } from "@infrastructure/api/dtos/ProductDTO"

export const ProductMapper = {
  toDomain(dto: ProductDTO): Product {
    return {
      id: dto.id,
      title: dto.title,
      price: dto.price,
      description: dto.description,
      category: dto.category,
      image: dto.image,
    }
  },
}
