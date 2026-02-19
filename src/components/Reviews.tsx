import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Jessica Miller',
    text: 'Absolutely love the quality and comfort! The lingerie fits perfectly and the materials are premium. Will definitely order again.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 2,
    name: 'Amanda Taylor',
    text: 'Beautiful designs and exceptional quality. The attention to detail is remarkable. Highly recommend this store!',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 3,
    name: 'Rachel Anderson',
    text: 'The best lingerie shopping experience! Fast shipping and stunning products. Customer service is top-notch.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">Client Reviews</h2>

        <div className="relative">
          <div className="bg-gray-50 p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(reviews[currentReview].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-rose-500 text-rose-500" />
              ))}
            </div>

            <p className="text-gray-700 text-center text-lg leading-relaxed mb-8 italic">
              "{reviews[currentReview].text}"
            </p>

            <div className="flex items-center justify-center">
              <img
                src={reviews[currentReview].image}
                alt={reviews[currentReview].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-medium">{reviews[currentReview].name}</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
          </div>

          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-2 rounded-full hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg p-2 rounded-full hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentReview ? 'bg-rose-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
