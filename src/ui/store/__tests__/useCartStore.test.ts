import type { Product } from "@domain/models/Product"
import { Price } from "@domain/value-objects/Price"
import { beforeEach } from "vitest"
import { describe, expect, it } from "vitest"
import { useCartStore } from "../useCartStore"

const createProduct = (id: number, price: number): Product => ({
  id,
  title: `Product ${id}`,
  price: Price.create(price),
  description: "desc",
  category: "cat",
  image: "img",
})

describe("Cart Store", () => {
  beforeEach(() => {
    useCartStore.setState({
      items: [],
      isOpen: false,
    })
  })

  it("should add item to cart", () => {
    const product = createProduct(1, 100)

    useCartStore.getState().addToCart(product)

    const { items } = useCartStore.getState()
    expect(items).toHaveLength(1)
    expect(items[0].quantity).toBe(1)
    expect(items[0].product.id).toBe(1)
  })
  it("should increment quantity if item exists", () => {
    const product = createProduct(1, 100)

    useCartStore.getState().addToCart(product)
    useCartStore.getState().addToCart(product)

    const { items } = useCartStore.getState()
    expect(items).toHaveLength(1)
    expect(items[0].quantity).toBe(2)
    expect(items[0].product.id).toBe(1)
  })
  it("should caculate total price correctly", () => {
    const p1 = createProduct(1, 100)
    const p2 = createProduct(2, 200)

    useCartStore.getState().addToCart(p1)
    useCartStore.getState().addToCart(p2)
    useCartStore.getState().addToCart(p2)

    expect(useCartStore.getState().totalPrice()).toBe(500)
  })

  it("should remove item when quantity is 0", () => {
    const product = createProduct(1, 100)

    useCartStore.getState().addToCart(product)

    useCartStore.getState().decreaseQuantity(product.id)

    expect(useCartStore.getState().items).toHaveLength(0)
  })
})
