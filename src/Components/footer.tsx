import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube
} from 'react-icons/fa';
import contactImage from '../webassets/image-removebg-preview-4neww.png';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex flex-col justify-center items-center md:flex-row flex-wrap justify-between items-start min-h-[450px] md:p-8 bg-[#3b2322] text-white">
        {/* About Us Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-8 md:mt-20">
          <div className="font-semibold text-2xl md:text-3xl lg:text-3xl mb-4 ">About Us</div>
          <p className="text-base md:text-lg lg:text-xl">
            Scelerisque facilisis primis vivamus mauris urna mus interdum odio netus metus, eros hendrerit pulvinar eleifend rhoncus cursus commodo justo. Mollis nisl montes ultricies in.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-10 md:mt-20">
          <div className="font-semibold text-2xl md:text-3xl lg:text-3xl mb-2">Quick Links</div>
          {["Offer Zone", "SiteMap", "New Launch", "Login", "Career"].map((link, i) => (
            <a key={i} href="#" className="block text-base md:text-lg lg:text-xl mb-1 hover:underline">{link}</a>
          ))}
        </div>

        {/* Help Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-10 md:mt-20">
          <div className="font-semibold text-2xl md:text-3xl lg:text-3xl mb-4">Help</div>
          {["Return/Exchange", "Contact Us", "Shipping & Delivery", "Lost Password", "Privacy Policy"].map((link, i) => (
            <a key={i} href="#" className="block text-base md:text-lg lg:text-lg mb-1 hover:underline">{link}</a>
          ))}
        </div>

        {/* Contact Details Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-10 md:mt-20 mb-10 md:mb-0">
          <div className="font-semibold text-2xl md:text-3xl lg:text-3xl mb-4">Contact Details</div>
          <p className="text-base md:text-lg lg:text-xl ">
            Address: 3548 Columbia Mine Road, <br />
            Wheeling, West Virginia, 26003
          </p>
          <p className="text-base md:text-lg lg:text-xl ">Contact: 304-559-3023</p>
          <p className="text-base md:text-lg lg:text-xl ">E-mail: leathershop@store.com</p>

          <img
            src={contactImage}
            alt="Contact"
            className="mt-4 w-3xs h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-md shadow-lg"
          />

        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row border-2 border-gray-600 justify-between items-center px-4 py-4 bg-[#3b2322] text-white text-sm md:text-base">
        <div className="mb-2 md:mb-0 text-lg md:text-md ml-4 text-center md:text-left">
          Copyright | The Shop Mania | Developed by ThemeHunk
        </div>
        <div className="flex space-x-4 lg:text-2xl mr-4 mb-2 md:mb-0 text-sm md:text-xl ml-4 text-center md:text-left">
          <a href="#" className="text-[#1877f2] hover:text-[#1568C0]"><FaFacebookF /></a>
          <a href="#" className="text-[#e4405f] hover:text-[#C13584]"><FaInstagram /></a>
          <a href="#" className="text-[#e60023] hover:text-[#BF0022]"><FaPinterestP /></a>
          <a href="#" className="text-[#1da1f2] hover:text-[#0d95e8]"><FaTwitter /></a>
          <a href="#" className="text-[#0077b5] hover:text-[#005d93]"><FaLinkedinIn /></a>
          <a href="#" className="text-[#000000] hover:text-[#69C9D0]"><FaTiktok /></a>
          <a href="#" className="text-[#ff0000] hover:text-[#e60000]"><FaYoutube /></a>
        </div>
      </div>
    </>
  );
};

export default Footer;
