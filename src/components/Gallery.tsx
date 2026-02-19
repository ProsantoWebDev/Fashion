const galleryImages = [
  'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/6311628/pexels-photo-6311628.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/8532776/pexels-photo-8532776.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/7679477/pexels-photo-7679477.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/8532619/pexels-photo-8532619.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600'
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">Get a Little Closer</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden group aspect-square"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
