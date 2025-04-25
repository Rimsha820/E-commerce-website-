import React, { useState } from 'react';
import img1 from '../webassets/blt-1.jpg';
import img2 from '../webassets/bgs-1.jpg';
import img3 from '../webassets/jckt-1.jpg';
import img4 from '../webassets/keychains-1.jpg';
import img5 from '../webassets/neww-1.jpg';
import img6 from '../webassets/c1-1.jpg';
import img7 from '../webassets/glss-1.jpg';
import img8 from '../webassets/bgtt-1.jpg';
import arrivalImg from '../webassets/Brown-Modern-New-Arrival-Fashion-New-Arrival-Banner-1.jpg';
import Shop from '../Components/Shops';
import menImg1 from '../webassets/p19-1.jpg';
import menImg2 from '../webassets/p21-1.jpg';
import menImg3 from '../webassets/p20-1.jpg';
import womenImg1 from '../webassets/p8-1.jpg';
import womenImg2 from '../webassets/p10-1.jpg';
import womenImg3 from '../webassets/p11-1.jpg';
import Luxary from '../webassets/ttt-1.jpg';
import Evaluate from '../webassets/bgbr-1.jpg';
import { useCart } from '../Cartcontext/Cartcontexr';

const Home: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<'men' | 'women'>('men');

  const essentials = [
    { name: 'Belts', image: img1 },
    { name: 'Bags', image: img2 },
    { name: 'Jackets', image: img3 },
    { name: 'Keychains', image: img4 },
    { name: 'Wallets', image: img5 },
    { name: 'Card Holders', image: img6 },
    { name: 'Glasses', image: img7 },
    { name: 'Backpacks', image: img8 },
  ];

  const menArrivals = [
    { id: 1, title: 'Quisque', image: menImg1, price: 79.99 },
    { id: 2, title: 'Sodales', image: menImg2, price: 39.99 },
    { id: 3, title: 'Senectus', image: menImg3, price: 29.99 },
  ];

  const womenArrivals = [
    { id: 4, title: 'Torquent', image: womenImg1, price: 89.99 },
    { id: 5, title: 'Dictum', image: womenImg2, price: 14.99 },
    { id: 6, title: 'Senectus', image: womenImg3, price: 59.99 },
  ];

  const currentArrivals = selectedCategory === 'men' ? menArrivals : womenArrivals;

  const handleAddToCart = (item: { id: number; title: string; image: string; price: number }) => {
    addToCart({ id: item.id, name: item.title, price: item.price, image: item.image, });
  };

  return (
    <div className=" sm:px-8 md:px-12 py-10 text-center">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-8">Choose Your Essentials</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-5 sm:gap-x-5 sm:gap-y-8 max-w-5xl mx-auto mb-12">
        {essentials.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <p className="mt-3 text-lg font-medium">{product.name}</p>
          </div>
        ))}
      </div>
      {/* Arrival Image */}
      <div className="max-w-3xl mx-auto mb-6">
        <img
          src={arrivalImg}
          alt="New Arrival"
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* New Arrivals Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2">New Arrivals</h2>

      {/* Category Switch Text */}
      <div className="flex justify-center items-center space-x-6 mb-6 text-gray-600 text-xl sm:text-2xl">
        <span
          onClick={() => setSelectedCategory('men')}
          className={`cursor-pointer hover:text-black transition ${selectedCategory === 'men' ? 'font-bold text-black' : ''}`}
        >
          For Men
        </span>
        <span
          onClick={() => setSelectedCategory('women')}
          className={`cursor-pointer hover:text-black transition ${selectedCategory === 'women' ? 'font-bold text-black' : ''}`}
        >
          For Women
        </span>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto ">
        {currentArrivals.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow-md overflow-hidden bg-white flex flex-col hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex flex-col items-center text-center">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
              <button
                className="mt-3 px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <button className="bg-black text-white px-6 sm:px-12 py-2 sm:py-3 text-sm sm:text-xl mt-8 rounded hover:bg-gray-800 transition">
          Shop New Arrival
        </button>
      </div>

      {/* Dual Promo Images with Headings and Shop Now Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 px-4">
        {/* Image 1 */}
        <div className="relative w-full sm:w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
          <img
            src={Luxary}
            alt="Promo Men"
            className="w-full sm:h-96 lg:h-[30rem] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center sm:justify-between items-center text-black px-4 py-6">
            <h3 className="text-center text-base sm:text-xl lg:text-3xl font-semibold mt-6 sm:mt-20">
              Luxury Leather for <br /> Every Journey
            </h3>
            <button className="mt-4 sm:mt-6 bg-white text-black text-sm sm:text-lg px-5 sm:px-7 py-2 sm:py-3 rounded hover:bg-black hover:text-white transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative w-full sm:w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
          <img
            src={Evaluate}
            alt="Promo Women"
            className="w-full sm:h-96 lg:h-[30rem] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center sm:justify-between items-center text-black px-4 py-6">
            <h3 className="text-center text-base sm:text-xl lg:text-3xl font-semibold mt-6 sm:mt-20">
              Elevate Your Style <br /> with Luxe Leather
            </h3>
            <button className="mt-4 sm:mt-6 bg-white text-black text-sm sm:text-lg px-5 sm:px-7 py-2 sm:py-3 rounded hover:bg-black hover:text-white transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Shop />
      </div>
    </div>
  );
};

export default Home;
