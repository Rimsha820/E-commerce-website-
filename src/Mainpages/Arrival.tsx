import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import product1 from '../webassets/p10-1.jpg';
import product2 from '../webassets/p12-1.jpg';
import product3 from '../webassets/p4-1-300x300.jpg';
import product4 from '../webassets/p7-1.jpg';
import product5 from '../webassets/p9-1.jpg';
import product6 from '../webassets/p1-1-300x300.jpg';
import product7 from '../webassets/p20-1.jpg';
import product8 from '../webassets/p21-1.jpg';
import product9 from '../webassets/p5-1-300x300.jpg';
import { useCart } from '../Cartcontext/Cartcontexr';

const products = [
  { img: product1, name: 'Dictum', price: '$189.00 – $249.00' },
  { img: product2, name: 'Integer', price: '$124.00' },
  { img: product3, name: 'Lobortis', price: '$120.00' },
  { img: product4, name: 'Pharetra', price: '$229.00' },
  { img: product5, name: 'Quisque', price: '$159.00' },
  { img: product6, name: 'Senectus', price: '$120.00' },
  { img: product7, name: 'Senectus', price: '$137.00' },
  { img: product8, name: 'Sodales', price: '$170.00' },
  { img: product9, name: 'Viverra', price: '$139.00' },
];

const productMeta = [
  { size: 'Large', leather: 'Full-Grain Leather', color: 'Black' },
  { size: 'Medium', leather: 'Genuine Leather', color: 'Brown' },
  { size: 'Small', leather: 'Top-Grain Leather', color: 'Dark Brown' },
  { size: 'Large', leather: 'Exotic Leather', color: 'Light Brown' },
  { size: 'Medium', leather: 'Full-Grain Leather', color: 'Black' },
  { size: 'Extra Large', leather: 'Genuine Leather', color: 'Brown' },
  { size: 'Small', leather: 'Top-Grain Leather', color: 'Dark Brown' },
  { size: 'Medium', leather: 'Full-Grain Leather', color: 'Black' },
  { size: 'Large', leather: 'Exotic Leather', color: 'Light Brown' },
];

const NewArrival: React.FC = () => {
  const [maxPrice, setMaxPrice] = useState(249);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [sortType, setSortType] = useState('default');
  const { addToCart } = useCart();
  const prevMaxPrice = useRef(maxPrice);
  const navigate = useNavigate();

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedLeatherTypes, setSelectedLeatherTypes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  useEffect(() => {
    if (selectedProduct) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedProduct]);

  const toggleSelection = (value: string, list: string[], setter: (val: string[]) => void) => {
    if (list.includes(value)) {
      setter(list.filter((v) => v !== value));
    } else {
      setter([...list, value]);
    }
  };

  const filteredProducts = products
    .map((product, i) => ({ ...product, ...productMeta[i] }))
    .filter((product) => {
      const price = parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0;
      const matchesPrice = price <= maxPrice;
      const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size);
      const matchesLeather = selectedLeatherTypes.length === 0 || selectedLeatherTypes.includes(product.leather);
      const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);
      return matchesPrice && matchesSize && matchesLeather && matchesColor;
    })
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
      const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
      switch (sortType) {
        case 'priceLowToHigh':
          return priceA - priceB;
        case 'priceHighToLow':
          return priceB - priceA;
        case 'latest':
          return b.name.localeCompare(a.name);
        case 'popularity':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="p-4 md:p-8 lg:p-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-1/5 space-y-8">
          {/* Price Filter */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">By Price</h3>
            <input
              type="range"
              min={120}
              max={500}
              value={maxPrice}
              onChange={(e) => {
                const newPrice = Number(e.target.value);
                if (newPrice > prevMaxPrice.current) {
                  setSortType('priceHighToLow');
                } else if (newPrice < prevMaxPrice.current) {
                  setSortType('priceLowToHigh');
                }
                prevMaxPrice.current = newPrice;
                setMaxPrice(newPrice);
              }}
              className="w-full accent-black"
            />
            <div className="flex justify-between text-sm mt-4">
              <div className="text-center">
                <div className="border px-4 py-3 text-gray-700 font-medium">$120</div>
                <span className="text-md text-gray-600 mt-1 block">Min. Price</span>
              </div>
              <div className="text-center">
                <div className="border px-4 py-3 text-gray-700 font-medium">${maxPrice}</div>
                <span className="text-md text-gray-600 mt-1 block">Max. Price</span>
              </div>
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">By Size</h3>
            <ul className="space-y-2 text-gray-700">
              {['Extra Large', 'Large', 'Medium', 'Small'].map((size) => (
                <li key={size} className="flex items-center space-x-2 mb-4 lg:text-xl">
                  <input
                    type="checkbox"
                    className="accent-black w-5 h-5"
                    checked={selectedSizes.includes(size)}
                    onChange={() => toggleSelection(size, selectedSizes, setSelectedSizes)}
                  />
                  <span className="ml-2">{size}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Leather Type Filter */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">By Leather Type</h3>
            <ul className="space-y-2 text-gray-700">
              {['Exotic Leather', 'Full-Grain Leather', 'Genuine Leather', 'Top-Grain Leather'].map((type) => (
                <li key={type} className="flex items-center space-x-2 mb-4 lg:text-xl">
                  <input
                    type="checkbox"
                    className="accent-black w-5 h-5"
                    checked={selectedLeatherTypes.includes(type)}
                    onChange={() => toggleSelection(type, selectedLeatherTypes, setSelectedLeatherTypes)}
                  />
                  <span className="ml-2">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Color Filter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">By Color</h3>
            <ul className="space-y-2 text-gray-700">
              {['Black', 'Brown', 'Dark Brown', 'Light Brown'].map((color) => (
                <li key={color} className="flex items-center lg:text-xl space-x-2 mb-4">
                  <input
                    type="checkbox"
                    className="accent-black w-5 h-5"
                    checked={selectedColors.includes(color)}
                    onChange={() => toggleSelection(color, selectedColors, setSelectedColors)}
                  />
                  <span className="ml-2">{color}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-4/5 space-y-6 ml-0 lg:ml-16">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-lg text-gray-700 font-medium">Showing {filteredProducts.length} results</p>
            <div className="mt-2 md:mt-0 flex items-center gap-2">
              <span className="text-gray-700 text-lg font-medium">Sort by:</span>
              <select
                className="border px-3 py-2 rounded-md text-gray-700 text-sm"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="default">Default Sorting</option>
                <option value="popularity">Sort by Popularity</option>
                <option value="rating">Sort by Average Rating</option>
                <option value="latest">Sort by Latest</option>
                <option value="priceLowToHigh">Sort by Price: Low to High</option>
                <option value="priceHighToLow">Sort by Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={index} className="relative group overflow-hidden">
                <div className="relative">
                  <div onClick={() => navigate(`/product/${index + 1}`)} className="cursor-pointer">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-72  object-cover transition-transform duration-300 group-hover:scale-105 block"
                    />
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute bottom-0 left-0 w-full bg-black text-white text-sm py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Quick View
                  </button>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-gray-800 font-semibold text-lg">{product.name}</p>
                    <p className="text-gray-600 text-md">{product.price}</p>
                  </div>
                  <button
                    className="bg-black text-white p-3"
                    onClick={() =>
                      addToCart({
                        id: index + 1,
                        name: product.name,
                        price: parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0,
                        image: product.img,
                      })
                    }
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick View Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-md max-w-4xl w-full flex flex-col md:flex-row relative">
            <button
              className="absolute top-4 right-4 bg-black text-white rounded-full w-7 h-7 flex items-center justify-center hover:scale-105 transition"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              className="w-full md:w-1/2 h-auto object-cover rounded"
            />
            <div className="p-4 md:p-6 flex-1">
              <h2 className="text-2xl font-semibold mb-2">{selectedProduct.name}</h2>
              <p className="text-xl text-gray-700 mb-4">{selectedProduct.price}</p>
              <p className="text-gray-600 mb-4">
                Malesuada erat dapibus eu auctor cras quisque bibendum enim urna nec aliquam est sociis,
                condimentum cubilia integer et feugiat porttitor euismod nibh dictum arcu quam.
              </p>
              <div>
                <h4 className="text-md font-semibold mb-6">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {['Extra Large', 'Large', 'Medium', 'Small'].map((size) => (
                    <button
                      key={size}
                      className="border px-3 py-1 rounded  hover:bg-black hover:text-white transition col-span-1"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <button
                className="mt-6 text-sm text-red-500 underline md:hidden"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewArrival;
