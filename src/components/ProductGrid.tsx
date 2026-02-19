import { Heart, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-light text-center mb-12">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden bg-gray-100 mb-4 aspect-[3/4]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

              <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full hover:bg-rose-600 hover:text-white transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="bg-white p-2 rounded-full hover:bg-rose-600 hover:text-white transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h3 className="text-sm md:text-base text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-900 font-medium">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
