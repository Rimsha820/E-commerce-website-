import { FaEye, FaShoppingCart, FaShoppingBag, FaHandPaper, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FloatingButtons = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-0 flex flex-col z-50 items-end space-y-2">
      {/* Demos Button */}
      <a
        href="https://themehunk.com/section/th-shop-mania/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-20"
      >
        <button className="bg-red-600 hover:bg-red-700 mt-4 text-white w-full py-3 rounded-l-md shadow-lg flex flex-col items-center justify-center">
          <FaEye className="text-white text-xl mb-1" />
          <span className="text-xs">Demos</span>
        </button>
      </a>

      {/* Buy Now Button */}
      <Link to="/shop" className="w-20">
        <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-l-md shadow-lg flex flex-col items-center justify-center">
          <FaShoppingCart className="text-white text-xl mb-1" />
          <span className="text-xs">Buy Now</span>
        </button>
      </Link>

      {/* Circle Buttons */}
      <div className="flex flex-col items-end space-y-2 mt-48">
        <Link to="/cart">
          <button className="bg-white hover:bg-gray-100 text-black w-16 h-16 rounded-full shadow-lg flex items-center justify-center mr-2">
            <FaShoppingBag className="text-lg" />
          </button>
        </Link>

        <Link to="/cart">
          <button className="bg-white hover:bg-gray-100 text-black w-16 h-16 rounded-full shadow-lg flex items-center justify-center mr-2">
            <FaHandPaper className="text-lg" />
          </button>
        </Link>

        <button
          onClick={handleScrollToTop}
          className="bg-white hover:bg-gray-100 text-black w-16 h-16 rounded-full shadow-lg flex items-center justify-center mr-2"
        >
          <FaClock className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default FloatingButtons;
