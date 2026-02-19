import { Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Selecting Perfect Lingerie',
    excerpt: 'Discover how to choose the perfect lingerie that combines comfort with elegance...',
    image: 'https://images.pexels.com/photos/7679641/pexels-photo-7679641.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 15, 2024',
    author: 'Sarah Johnson'
  },
  {
    id: 2,
    title: 'Spring Collection Highlights',
    excerpt: 'Explore our latest spring collection featuring delicate laces and soft silks...',
    image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 12, 2024',
    author: 'Emma Wilson'
  },
  {
    id: 3,
    title: 'Care Guide for Luxury Lingerie',
    excerpt: 'Learn the best practices to maintain your premium lingerie pieces...',
    image: 'https://images.pexels.com/photos/8532773/pexels-photo-8532773.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 10, 2024',
    author: 'Lisa Brown'
  },
  {
    id: 4,
    title: 'Trending Styles This Season',
    excerpt: 'From romantic florals to modern minimalism, discover what\'s trending...',
    image: 'https://images.pexels.com/photos/7679530/pexels-photo-7679530.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 8, 2024',
    author: 'Maria Garcia'
  }
];

export default function BlogSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">Latest Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white group overflow-hidden">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </span>
                </div>

                <h3 className="text-lg font-medium mb-2 group-hover:text-rose-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="text-rose-600 text-sm hover:text-rose-700 font-medium"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
