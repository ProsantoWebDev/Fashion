export default function PromoBanners() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-80 overflow-hidden group">
          <img
            src="https://images.pexels.com/photos/7679530/pexels-photo-7679530.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="New Spring Collection"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-light mb-2">New Spring Collection</h3>
            <p className="text-white/90 mb-4">Discover the latest styles</p>
            <a href="#" className="inline-block border border-white px-6 py-2 hover:bg-white hover:text-gray-900 transition-colors">
              Explore More
            </a>
          </div>
        </div>

        <div className="relative h-80 overflow-hidden group">
          <img
            src="https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Best Lingerie Style 2024"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-light mb-2">Best Lingerie Style 2024</h3>
            <p className="text-white/90 mb-4">Timeless elegance</p>
            <a href="#" className="inline-block border border-white px-6 py-2 hover:bg-white hover:text-gray-900 transition-colors">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
