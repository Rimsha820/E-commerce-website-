import { useState } from 'react';
import { FaSearch, FaUser, FaShoppingBag, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../webassets/5.png';
import Cart from './Cart'; 
import MobileMenu from './mobile'; 
import { useCart } from '../Cartcontext/Cartcontexr';
import { Link, useLocation ,useNavigate } from 'react-router-dom';
import Login from './Login';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation(); 
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const isLoginPage = location.pathname === '/login';

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  const handleUserClick = () => {
    navigate('/login');
  };
  if (isLoginPage) return <Login />;


  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'New Arrival', path: '/new-arrival' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'About Us', path: '/about-us' },
  ];

  return (
    <header className="bg-[#3b2322] text-white">
      {/* Top Header Row */}
      <div className="flex items-center justify-between px-4 md:p-6 lg:p-8 sm:px-8 py-3 border-b border-gray-600 relative">
        <div className="hidden sm:flex items-center text-base font-medium">
          <FaPhone className="mr-2 text-xl" />
          Call To +1800090098
        </div>

        {/* Mobile: Logo left */}
        <div className="sm:hidden">
          <img src={logo} alt="Logo" className="h-10 object-contain" />
        </div>

        {/* Center: Logo (desktop only) */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="h-16 object-contain" />
        </div>

        <div className="flex items-center space-x-4 text-2xl">
          <div className="sm:hidden cursor-pointer" onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Search */}
          <div className="hidden sm:block relative">
            <FaSearch className="cursor-pointer" onClick={() => setSearchVisible(!isSearchVisible)} />
            {isSearchVisible && (
              <div className="absolute top-full right-0 mt-2 w-[200px] bg-transparent border border-gray-400 rounded-md shadow-lg">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-2 py-3 bg-transparent text-white text-sm placeholder-gray-400 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>
              </div>
            )}
          </div>

          {/* User Icon */}
          <FaUser className="cursor-pointer" onClick={handleUserClick} />

          {/* Cart Icon */}
          <div className="relative">
            <FaShoppingBag className="cursor-pointer" onClick={handleCartToggle} />
            {totalQuantity > 0 && (
              <span className="hidden sm:flex absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile: Search bar below header */}
      <div className="sm:hidden px-4 py-2 border-b border-gray-600">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-2 py-2 bg-transparent text-white text-sm placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden sm:block py-4 px-4 sm:px-8 bg-[#3b2322] border-b border-gray-700">
        <ul className="flex flex-row justify-center gap-12 text-xl font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path; 
            return (
              <li key={item.name} className="relative group">
                <Link to={item.path}>
                  <span
                    className={`absolute left-[-16px] top-0 bottom-0 hidden group-hover:inline ${isActive ? 'inline' : ''}`}
                  >
                    {'['}
                  </span>
                  <span
                    className={`absolute right-[-16px] top-0 bottom-0 hidden group-hover:inline ${isActive ? 'inline' : ''}`}
                  >
                    {']'}
                  </span>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Cart Sidebar */}
      {isCartOpen && <Cart onClose={handleCloseCart} />}

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu onClose={handleMenuToggle} />}
    </header>
  );
}

export default Header;
