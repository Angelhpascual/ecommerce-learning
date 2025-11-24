import { GetProducts } from "@application/use-cases/GetProducts"
import type { Product } from "@domain/models/Product"
import { FakeStoreApiProductRepository } from "@infrastructure/api/FakeStoreApiProductRepository"
import { create } from "zustand"

const repository = new FakeStoreApiProductRepository()
const getProductsUseCase = new GetProducts(repository)

interface ProductState {
  products: Product[]
  isLoading: boolean
  error: string | null

  fetchProducts(): Promise<void>
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null })
    try {
      const products = await getProductsUseCase.execute()
      set({ products, isLoading: false })
    } catch (error) {
      set({
        error: (error as Error)?.message ?? "Unknown error",
        isLoading: false,
      })
    }
  },
}))
