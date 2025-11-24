import type { CartItem } from "@domain/models/CartItem"
import type { Product } from "@domain/models/Product"
import { create } from "zustand"

interface CartState {
  items: CartItem[]
  isOpen: boolean

  addToCart(product: Product): void
  removeFromCart(productId: number): void
  toggleCart(): void
  clearCart(): void

  totalItems(): number
  totalPrice(): number
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,

  addToCart: (product: Product) => {
    const { items } = get()
    const existingItem = items.find((i) => i.product.id === product.id)

    if (existingItem) {
      set({
        items: items.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      })
    } else {
      set({ items: [...items, { product, quantity: 1 }] })
    }
  },

  removeFromCart: (productId: number) => {
    set({
      items: get().items.filter((i) => i.product.id !== productId),
    })
  },

  toggleCart: () => set({ isOpen: !get().isOpen }),
  clearCart: () => set({ items: [] }),

  totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),

  totalPrice: () =>
    get().items.reduce(
      (acc, item) => acc + item.product.price.getValue() * item.quantity,
      0
    ),
}))
