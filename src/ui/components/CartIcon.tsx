import { useCartStore } from "@ui/store/useCartStore"
import { ShoppingBag } from "lucide-react"

export const CartIcon = () => {
  const { toggleCart, totalItems } = useCartStore()
  const count = totalItems()

  return (
    <button
      onClick={toggleCart}
      className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors group"
    >
      <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />

      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-black rounded-full ring-2 ring-white animate-in zoom-in">
          {count}
        </span>
      )}
    </button>
  )
}
