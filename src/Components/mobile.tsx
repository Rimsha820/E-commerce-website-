import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  onClose: () => void; 
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col w-56 items-center justify-start z-50">
      {/* Black background section with close text and icon */}
      <div className="w-full bg-black text-white flex items-center justify-center py-2">
        <button 
          className="flex items-center justify-center text-xl space-x-2"
          onClick={onClose}
        >
           <span>Close</span>
          <FaTimes className="text-xl mt-1" />
         
        </button>
      </div>

      {/* Menu Content */}
      <div className="bg-white w-full h-full sm:w-1/2 p-8  overflow-auto mt-4">
        <ul className="flex flex-col gap-6 text-black text-md">
          <li>
            <Link to="/" className="block" onClick={onClose}>Home</Link>
          </li>
          <li>
            <Link to="/shop" className="block" onClick={onClose}>Shop</Link>
          </li>
          <li>
            <Link to="/new-arrival" className="block" onClick={onClose}>New Arrival</Link>
          </li>
          <li>
            <Link to="/blog" className="block" onClick={onClose}>Blog</Link>
          </li>
          <li>
            <Link to="/contact-us" className="block" onClick={onClose}>Contact Us</Link>
          </li>
          <li>
            <Link to="/about-us" className="block" onClick={onClose}>About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
