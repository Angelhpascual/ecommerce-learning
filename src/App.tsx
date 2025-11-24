import { useEffect } from "react"
import { useProductStore } from "@ui/store/useProductStore"
import { ProductCard } from "@ui/components/ProductCard"
import { CartIcon } from "@ui/components/CartIcon"
import { CartSidebar } from "@ui/components/CartSideBar"

function App() {
  const { products, isLoading, error, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">E-commerce DDD</h1>
          <div className="flex items-center gap-2">
            <CartIcon />
          </div>
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <CartSidebar />
    </main>
  )
}

export default App
