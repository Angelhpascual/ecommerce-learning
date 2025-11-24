import { X, Trash2, Plus, Minus } from "lucide-react"
import { useCartStore } from "@ui/store/useCartStore"

export const CartSidebar = () => {
  const {
    items,
    isOpen,
    toggleCart,
    removeFromCart,
    addToCart,
    clearCart,
    totalPrice,
  } = useCartStore()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={toggleCart}
      />

      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="h-full w-full flex flex-col bg-white shadow-xl animate-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between px-4 py-6 bg-gray-50 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-900">Tu Carrito</h2>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                <p>Tu carrito está vacío 😔</p>
                <button
                  onClick={toggleCart}
                  className="text-blue-600 font-medium hover:underline"
                >
                  ¡Vamos a comprar!
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="h-full w-full object-contain object-center p-2"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3 className="line-clamp-1">{item.product.title}</h3>
                        <p className="ml-4">{item.product.price.format()}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.product.category}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1 hover:bg-white rounded-md shadow-sm transition-all"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => addToCart(item.product)}
                          className="p-1 hover:bg-white rounded-md shadow-sm transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="font-medium text-red-600 hover:text-red-500 flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>
                  {new Intl.NumberFormat("es-ES", {
                    style: "currency",
                    currency: "EUR",
                  }).format(totalPrice())}
                </p>
              </div>
              <button
                className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg active:scale-[0.98]"
                onClick={() =>
                  alert("¡Gracias por tu compra! (Aquí iría el Checkout)")
                }
              >
                Pagar Ahora
              </button>
              <button
                onClick={clearCart}
                className="w-full mt-3 text-sm text-gray-500 hover:text-red-600 transition-colors"
              >
                Vaciar Carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
