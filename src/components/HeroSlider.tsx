import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'Explore Our Unique Nightwear Pieces',
    subtitle: 'Premium nightwear',
    image: 'https://images.pexels.com/photos/7679641/pexels-photo-7679641.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#'
  },
  {
    id: 2,
    title: 'Latest Design Premium Lingerie',
    subtitle: 'Premium lingerie',
    image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#'
  },
  {
    id: 3,
    title: 'High-Quality Luxury Lingerie',
    subtitle: 'Luxury collection',
    image: 'https://images.pexels.com/photos/8532773/pexels-photo-8532773.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-xl">
                  <p className="text-white/90 text-sm md:text-base mb-2 uppercase tracking-wider">
                    {slide.subtitle}
                  </p>
                  <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                    {slide.title}
                  </h2>
                  <a
                    href={slide.link}
                    className="inline-block bg-white text-gray-900 px-8 py-3 hover:bg-rose-600 hover:text-white transition-colors duration-300"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
