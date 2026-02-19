export default function InfoSection() {
  return (
    <section className="bg-rose-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Discount Bra Offers"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Discount Bra Offers</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which don't
              look even slightly believable.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
              anything embarrassing hidden in the middle of text.
            </p>
            <a
              href="#"
              className="inline-block bg-rose-600 text-white px-8 py-3 hover:bg-rose-700 transition-colors"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
