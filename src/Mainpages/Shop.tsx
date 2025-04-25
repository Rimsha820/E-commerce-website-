import React, { useState, useRef } from 'react';
import { ShoppingCart } from 'lucide-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useCart } from '../Cartcontext/Cartcontexr';
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
import product10 from '../webassets/p16-1.jpg';
import product11 from '../webassets/p14-1.jpg';
import product12 from '../webassets/p2-1-300x300.jpg';
import product13 from '../webassets/p13-1.jpg';
import product14 from '../webassets/p19-1.jpg';
import product15 from '../webassets/p18-1.jpg';
import product16 from '../webassets/p3-1-300x300.jpg';

import product20 from '../webassets/p15-1.jpg';
import product18 from '../webassets/p11-1.jpg';
import product19 from '../webassets/p6-1-1.jpg';
import product17 from '../webassets/p8-1.jpg';


// ---------------------- Product Type ----------------------
export type Product = {
  id: number;
  name: string;
  price: string;
  size: string;
  leather: string;
  color: string;
  img: string;
  waistSize?: string;
  description: string; 
  category?: string; 


};

const productImgs = [
  product1, product2, product3, product4, product5,
  product6, product7, product8, product9, product10,
  product11, product12, product13, product14, product15,
  product16, product17, product18, product19, product20,
];

const baseProducts = [
  { name: 'Dictum', price: '$189.00', size: 'Large', leather: 'Full-Grain Leather', color: 'Black', category: 'jacket' },
  { name: 'Integer', price: '$124.00', size: 'Medium', leather: 'Genuine Leather', color: 'Brown', category: 'strap' },
  { name: 'Lobortis', price: '$120.00', size: 'Small', leather: 'Top-Grain Leather', color: 'Dark Brown', category: 'shoes' },
  { name: 'Pharetra', price: '$229.00', size: 'Large', leather: 'Exotic Leather', color: 'Light Brown', category: 'jacket' },
  { name: 'Quisque', price: '$159.00', size: 'Medium', leather: 'Full-Grain Leather', color: 'Black', category: 'jacket' },
  { name: 'Senectus', price: '$120.00', size: 'Extra Large', leather: 'Genuine Leather', color: 'Brown', category: 'shoes' },
  { name: 'Vivamus', price: '$137.00', size: 'Small', leather: 'Top-Grain Leather', color: 'Dark Brown', category: 'pouch' },
  { name: 'Sodales', price: '$170.00', size: 'Medium', leather: 'Full-Grain Leather', color: 'Black', category: 'bag' },
  { name: 'Viverra', price: '$139.00', size: 'Large', leather: 'Exotic Leather', color: 'Light Brown', category: 'shoes' },
  { name: 'Arcu', price: '$149.00', size: 'Medium', leather: 'Top-Grain Leather', color: 'Black', category: 'watch' },
  { name: 'Curabitur', price: '$199.00', size: 'Large', leather: 'Full-Grain Leather', color: 'Brown', category: 'bag' },
  { name: 'Ultrices', price: '$210.00', size: 'Small', leather: 'Genuine Leather', color: 'Dark Brown', category: 'shoes' },
  { name: 'Tempus', price: '$185.00', size: 'Medium', leather: 'Exotic Leather', color: 'Black', category: 'wallet' },
  { name: 'Nullam', price: '$165.00', size: 'Large', leather: 'Full-Grain Leather', color: 'Brown', category: 'wallet' },
  { name: 'Mauris', price: '$142.00', size: 'Small', leather: 'Top-Grain Leather', color: 'Light Brown', category: 'watch' },
  { name: 'Egestas', price: '$155.00', size: 'Medium', leather: 'Full-Grain Leather', color: 'Black', category: 'shoes' },
  { name: 'Pulvinar', price: '$134.00', size: 'Extra Large', leather: 'Genuine Leather', color: 'Dark Brown', category: 'jacket' },
  { name: 'Fringilla', price: '$158.00', size: 'Large', leather: 'Top-Grain Leather', color: 'Brown', category: 'jacket' },
  { name: 'Porttitor', price: '$123.00', size: 'Medium', leather: 'Exotic Leather', color: 'Light Brown', category: 'jacket' },
  { name: 'Fusce', price: '$190.00', size: 'Large', leather: 'Full-Grain Leather', color: 'Black', category: 'belt' },
];


const waistSizes = ['S', 'M', 'L', 'XL'];

// Export for use in other components
export const extendedProducts: Product[] = Array.from({ length: 20 }, (_, i) => {
  const base = baseProducts[i % baseProducts.length];
  return {
    ...base,
    id: i + 1,
    img: productImgs[i % productImgs.length],
    waistSize: waistSizes[i % waistSizes.length],
    description: "Malesuada erat dapibus eu auctor cras quisque bibendum enim urna nec aliquam est sociis, condimentum cubilia integer et feugiat porttitor euismod nibh dictum arcu quam.",

  };
});

const Shop: React.FC = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [maxPrice, setMaxPrice] = useState(249);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedLeatherTypes, setSelectedLeatherTypes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedWaistSizes, setSelectedWaistSizes] = useState<string[]>([]);
  const [sortType, setSortType] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  const prevMaxPrice = useRef(maxPrice);
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  

  const toggleSelection = (value: string, list: string[], setter: (val: string[]) => void) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const filteredProducts = extendedProducts
    .filter((product) => {
      const price = parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0;
      const matchesPrice = price <= maxPrice;
      const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size);
      const matchesLeather = selectedLeatherTypes.length === 0 || selectedLeatherTypes.includes(product.leather);
      const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);
      const matchesWaist = selectedWaistSizes.length === 0 || selectedWaistSizes.includes(product.waistSize ?? '');
      return matchesPrice && matchesSize && matchesLeather && matchesColor && matchesWaist;
    })
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
      const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
      switch (sortType) {
        case 'priceLowToHigh': return priceA - priceB;
        case 'priceHighToLow': return priceB - priceA;
        case 'latest': return b.id - a.id;
        case 'popularity': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

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
            {['Extra Large', 'Large', 'Medium', 'Small'].map((size) => (
              <div key={size} className="flex items-center space-x-2 lg:text-lg  mb-4">
                <input
                  type="checkbox"
                  className="accent-black w-5 h-5"
                  checked={selectedSizes.includes(size)}
                  onChange={() => toggleSelection(size, selectedSizes, setSelectedSizes)}
                />
                <span className="ml-2 text-gray-700">{size}</span>
              </div>
            ))}
          </div>

          {/* Leather Filter */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">By Leather Type</h3>
            {['Exotic Leather', 'Full-Grain Leather', 'Genuine Leather', 'Top-Grain Leather'].map((type) => (
              <div key={type} className="flex items-center space-x-2  lg:text-lg mb-4">
                <input
                  type="checkbox"
                  className="accent-black w-5 h-5"
                  checked={selectedLeatherTypes.includes(type)}
                  onChange={() => toggleSelection(type, selectedLeatherTypes, setSelectedLeatherTypes)}
                />
                <span className="ml-2 text-gray-700">{type}</span>
              </div>
            ))}
          </div>

          {/* Color Filter */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">By Color</h3>
            {['Black', 'Brown', 'Dark Brown', 'Light Brown'].map((color) => (
              <div key={color} className="flex items-center space-x-2 lg:text-lg mb-4">
                <input
                  type="checkbox"
                  className="accent-black w-5 h-5"
                  checked={selectedColors.includes(color)}
                  onChange={() => toggleSelection(color, selectedColors, setSelectedColors)}
                />
                <span className="ml-2 text-gray-700">{color}</span>
              </div>
            ))}
          </div>

          {/* Waist Size Filter */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">By Waist Size</h3>
            {waistSizes.map((size) => (
              <div key={size} className="flex items-center space-x-2  lg:text-lg mb-4">
                <input
                  type="checkbox"
                  className="accent-black w-5 h-5"
                  checked={selectedWaistSizes.includes(size)}
                  onChange={() => toggleSelection(size, selectedWaistSizes, setSelectedWaistSizes)}
                />
                <span className="ml-2 text-gray-700">{size}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-4/5 lg:ml-16">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-700 font-medium">
              Showing {currentProducts.length} of {filteredProducts.length} results
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Sort by:</span>
              <select
                className="border px-3 py-2 rounded-md text-gray-700 text-sm"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="default">Default Sorting</option>
                <option value="popularity">Sort by Popularity</option>
                <option value="latest">Sort by Latest</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <div key={product.id} className="relative group overflow-hidden">
                <div className="relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                  />
                  <button
                    className="absolute bottom-0 left-0 w-full bg-black text-white text-sm py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => setSelectedProduct(product)}
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
                        id: product.id,
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

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
              <FaArrowLeft className={`text-lg ${currentPage === 1 ? 'text-gray-300' : 'text-black'}`} />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}>
              <FaArrowRight className={`text-lg ${currentPage === totalPages ? 'text-gray-300' : 'text-black'}`} />
            </button>
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
            <div className="p-4 md:p-6 flex-1 ">
              <h2 className="text-2xl font-semibold mb-2">{selectedProduct.name}</h2>
              <p className="text-xl text-gray-700 mb-4">{selectedProduct.price}</p>
              <p className="text-gray-600 mb-4">
                Malesuada erat dapibus eu auctor cras quisque bibendum enim urna nec aliquam est sociis,
                condimentum cubilia integer et feugiat porttitor euismod nibh dictum arcu quam.
              </p>
              <div>
                <h4 className="text-md font-semibold mb-2">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {['Extra Large', 'Large', 'Medium', 'Small'].map((size) => (
                    <button
                      key={size}
                      className="border px-3 py-1 rounded hover:bg-black hover:text-white transition col-span-1"
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

export default Shop;
