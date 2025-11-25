import type { ProductRepository } from "@domain/repositories/ProductRepository"
import { Price } from "@domain/value-objects/Price"
import { describe, expect, it, vi } from "vitest"
import { GetProducts } from "./GetProducts"

describe("GetProducts Use Case", () => {
  it("should return products from the repository", async () => {
    const mockRepo: ProductRepository = {
      getAll: vi.fn(),
      getById: vi.fn(),
    }

    const dummyProducts = [
      {
        id: 1,
        title: "Test",
        price: Price.create(10),
        description: "",
        category: "",
        image: "",
      },
    ]

    vi.mocked(mockRepo.getAll).mockResolvedValue(dummyProducts)

    const useCase = new GetProducts(mockRepo)

    const result = await useCase.execute()

    expect(result).toHaveLength(1)
    expect(result[0].title).toBe("Test")
    expect(mockRepo.getAll).toHaveBeenCalledTimes(1)
  })
})
