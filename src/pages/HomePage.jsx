import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import heroImage from '../assets/image.png';
import category1 from '../assets/category-1.jpg';
import category2 from '../assets/category-2.jpg';
import category3 from '../assets/category-3.jpg';
import ProductCard from '../components/ProductCard';
import offerImage from '../assets/exclusive.png';
import TestimonialCard from '../components/TestimonialCard';
import user1 from '../assets/user-1.png';
import user2 from '../assets/user-2.png';
import user3 from '../assets/user-3.png';
import brand1 from '../assets/logo-godrej.png';
import brand2 from '../assets/logo-oppo.png';
import brand3 from '../assets/logo-coca-cola.png';
import brand4 from '../assets/logo-paypal.png';
import brand5 from '../assets/logo-philips.png';

const testimonials = [
  {
    id: 1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    name: 'Sean Parker',
    image: user1,
  },
  {
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    name: 'Mike Smith',
    image: user2,
  },
  {
    id: 3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    name: 'Mabel Joe',
    image: user3,
  },
];

const HomePage = () => {
  const products = useSelector((state) => state.products.products);
  const featuredProducts = products.slice(0, 4);
  const latestProducts = products.slice(4, 8);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-red-100">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                GIVE YOUR WORKOUT
                <br /> A NEW STYLE!
              </h1>
              <p className="text-gray-600 mb-8">
                Success isn't always about greatness. It's about consistency.
                <br />
                Consistent hard work gains success. Greatness will come.
              </p>
              <Link to="/products">
                <Button>Explore Now &#8594;</Button>
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img src={heroImage} alt="Workout style" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="category-item">
              <img src={category1} alt="Category 1" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="category-item">
              <img src={category2} alt="Category 2" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="category-item">
              <img src={category3} alt="Category 3" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Latest Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 bg-gradient-to-r from-white to-red-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img src={offerImage} alt="Exclusive Offer" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-12">
              <p className="text-gray-600">Exclusively Available on RedStore</p>
              <h1 className="text-4xl font-bold text-gray-800 my-4">Smart Band 4</h1>
              <small className="text-gray-600">
                The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.
              </small>
              <div className="mt-8">
                <Link to="/products">
                  <Button>BUY NOW &#8594;</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src={brand1} alt="Godrej" className="h-12" />
            <img src={brand2} alt="Oppo" className="h-12" />
            <img src={brand3} alt="Coca-Cola" className="h-12" />
            <img src={brand4} alt="PayPal" className="h-12" />
            <img src={brand5} alt="Philips" className="h-12" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
