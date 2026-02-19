import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import PromoBanners from './components/PromoBanners';
import ProductGrid from './components/ProductGrid';
import InfoSection from './components/InfoSection';
import Newsletter from './components/Newsletter';
import Gallery from './components/Gallery';
import BlogSection from './components/BlogSection';
import Reviews from './components/Reviews';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <PromoBanners />
      <ProductGrid
        title="Trending Products"
        products={trendingProducts}
      />
      <InfoSection />
      <Newsletter />
      <ProductGrid
        title="New Arrivals"
        products={newArrivals}
      />
      <Gallery />
      <BlogSection />
      <Reviews />
      <InstagramFeed />
      <Footer />
    </div>
  );
}

const trendingProducts = [
  {
    id: 1,
    name: 'Silk Lace Bralette',
    price: 45.00,
    image: 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Satin Night Robe',
    price: 78.00,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Delicate Lace Set',
    price: 92.00,
    image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'Premium Silk Chemise',
    price: 65.00,
    image: 'https://images.pexels.com/photos/7679641/pexels-photo-7679641.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    name: 'Luxury Lingerie Set',
    price: 120.00,
    image: 'https://images.pexels.com/photos/8532773/pexels-photo-8532773.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const newArrivals = [
  {
    id: 6,
    name: 'Rose Lace Teddy',
    price: 85.00,
    image: 'https://images.pexels.com/photos/7679530/pexels-photo-7679530.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 7,
    name: 'Satin Slip Dress',
    price: 68.00,
    image: 'https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 8,
    name: 'Elegant Bodysuit',
    price: 95.00,
    image: 'https://images.pexels.com/photos/8532619/pexels-photo-8532619.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 9,
    name: 'Floral Bra Set',
    price: 72.00,
    image: 'https://images.pexels.com/photos/7679477/pexels-photo-7679477.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 10,
    name: 'Classic Lace Collection',
    price: 88.00,
    image: 'https://images.pexels.com/photos/6311628/pexels-photo-6311628.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 11,
    name: 'Vintage Style Corset',
    price: 105.00,
    image: 'https://images.pexels.com/photos/8532776/pexels-photo-8532776.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default App;
