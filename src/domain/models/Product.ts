import { Price } from "@domain/value-objects/Price"

export interface Product {
  id: number
  title: string
  price: Price
  description: string
  category: string
  image: string
}
