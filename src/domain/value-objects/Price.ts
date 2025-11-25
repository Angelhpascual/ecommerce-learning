export class Price {
  private readonly value: number

  private constructor(value: number) {
    this.value = value
  }

  static create(value: number): Price {
    if (value <= 0) {
      throw new Error("Price must be greater than 0")
    }
    return new Price(value)
  }

  getValue(): number {
    return this.value
  }

  format(): string {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(this.value)
  }
}
