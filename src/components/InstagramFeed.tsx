import { Instagram } from 'lucide-react';

const instagramImages = [
  'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/8532773/pexels-photo-8532773.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/7679530/pexels-photo-7679530.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/8532619/pexels-photo-8532619.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/7679477/pexels-photo-7679477.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/6311628/pexels-photo-6311628.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/8532776/pexels-photo-8532776.jpeg?auto=compress&cs=tinysrgb&w=400'
];

export default function InstagramFeed() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Our Instagram</h2>
          <a
            href="#"
            className="inline-flex items-center text-rose-600 hover:text-rose-700 transition-colors"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @luxe_lingerie
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-2">
          {instagramImages.map((image, index) => (
            <a
              key={index}
              href="#"
              className="relative overflow-hidden group aspect-square"
            >
              <img
                src={image}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
