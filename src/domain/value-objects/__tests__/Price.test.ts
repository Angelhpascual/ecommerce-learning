import { expect, it } from "vitest"
import { describe } from "vitest"
import { Price } from "../Price"

describe("Price", () => {
  it("should create a Price instance", () => {
    const price = Price.create(10)
    expect(price).toBeInstanceOf(Price)
    expect(price.getValue()).toBe(10)
  })

  it("should throw an error if the value is negative", () => {
    expect(() => Price.create(-10)).toThrow("Price must be greater than 0")
  })

  it("should format the price", () => {
    const price = Price.create(10)
    expect(price.format()).toMatch(/10,00\s?€/)
  })
})
