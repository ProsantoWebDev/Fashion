import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="bg-gray-900 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Uncover Your Perfect Fit With Our Lingerie
            </h2>
            <p className="text-white/80 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which don't
              look even slightly believable.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-light mb-6">Join Our Newsletter Now</h3>
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-600"
                />
              </div>
              <button
                type="submit"
                className="bg-rose-600 text-white px-8 py-3 hover:bg-rose-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
