import { Search, ShoppingBag, User, Heart, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-rose-50 text-center py-2 px-4 text-sm">
        <p className="text-rose-900">Lingerie spring sale for all bras - Discount 30%</p>
      </div>

      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold tracking-wider text-gray-900">LUXE</h1>
              <nav className="hidden lg:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">Home</a>
                <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">Shop</a>
                <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">Collections</a>
                <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">Sale</a>
                <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">Blog</a>
              </nav>
            </div>

            <div className="flex items-center space-x-6">
              <button className="hover:text-rose-600 transition-colors hidden sm:block">
                <Search className="w-5 h-5" />
              </button>
              <button className="hover:text-rose-600 transition-colors hidden sm:block">
                <Heart className="w-5 h-5" />
              </button>
              <button className="hover:text-rose-600 transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="hover:text-rose-600 transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-rose-600 transition-colors py-2">Home</a>
              <a href="#" className="block text-gray-700 hover:text-rose-600 transition-colors py-2">Shop</a>
              <a href="#" className="block text-gray-700 hover:text-rose-600 transition-colors py-2">Collections</a>
              <a href="#" className="block text-gray-700 hover:text-rose-600 transition-colors py-2">Sale</a>
              <a href="#" className="block text-gray-700 hover:text-rose-600 transition-colors py-2">Blog</a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
