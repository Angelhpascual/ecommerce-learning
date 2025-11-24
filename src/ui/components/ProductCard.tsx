import type { Product } from "@domain/models/Product"

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Imagen con efecto zoom */}
      <div className="aspect-square overflow-hidden bg-gray-50 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
        />
      </div>

      {/* Contenido */}
      <div className="p-5">
        <p className="text-xs font-medium text-blue-600 mb-1 uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">
            {product.price.format()} {/* ¡Usamos nuestro Value Object! */}
          </span>

          <button
            className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition-colors active:scale-95"
            onClick={() => console.log("Añadir al carrito", product.id)}
          >
            Añadir
          </button>
        </div>
      </div>
    </article>
  )
}
