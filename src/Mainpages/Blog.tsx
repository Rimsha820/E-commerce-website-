import React from 'react';
import { FaUser, FaRegCalendarAlt } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import image1 from '../webassets/blg2-1.jpg';
import image2 from '../webassets/blg3-1-768x477.jpg';
import image3 from '../webassets/blg4-1-768x477.jpg';
import image4 from '../webassets/blg-1-768x477.jpg';

const Blog: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 md:p-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Post 1 */}
        <div className="w-full">
          <img src={image1} alt="Sustainable Leather" className="w-full h-auto rounded-md mb-4 max-w-full" />
          <h3 className="text-xl text-black mb-2">Sustainability and Ethics</h3>
          <h4 className="text-2xl font-semibold text-black mb-1">The Journey to Sustainable Leather: What You Should Know</h4>

          <div className="flex flex-wrap items-center justify-between text-gray-500 text-xl mb-4 gap-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FaUser className="mr-1" />
                <span>wpthemes</span>
              </div>
              <div className="flex items-center">
                <FaRegCalendarAlt className="mr-1" />
                <span>January 30, 2025</span>
              </div>
            </div>
            <div className="relative">
              <FaMessage className="text-black text-xl" />
              <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </div>
            </div>
          </div>

          <p className=" lg:text-lg text-base sm:text-lg md:text-xl text-gray-700 mb-4">
            Nisl platea malesuada ullamcorper senectus nostra ut condimentum, auctor posuere imperdiet mi donec sed urna, nulla tincidunt natoque turpis cras venenatis. Quam duis purus tortor penatibus vehicula nisi, litora nisl vestibulum praesent laoreet ad, metus sociis ante parturient volutpat. Viverra primis odio velit donec iaculis quis metus integer non torquent ac faucibus, volutpat montes mi …
          </p>
          <button className="bg-white border border-black text-black font-semibold px-6 py-2 rounded hover:bg-gray-100">
            Read More
          </button>
        </div>

        {/* Post 2 */}
        <div className="w-full">
          <img src={image2} alt="Leather Crafting" className="w-full h-auto rounded-md mb-4 max-w-full" />
          <h3 className="text-xl text-black mb-2">Craftsmanship and Heritage</h3>
          <h4 className="text-2xl font-semibold text-black mb-1">The Art of Leather Crafting: From Raw Hide to Masterpiece</h4>

          <div className="flex flex-wrap items-center justify-between text-gray-500 text-xl mb-4 gap-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FaUser className="mr-1" />
                <span>wpthemes</span>
              </div>
              <div className="flex items-center">
                <FaRegCalendarAlt className="mr-1" />
                <span>January 30, 2025</span>
              </div>
            </div>
            <div className="relative">
              <FaMessage className="text-black text-xl" />
              <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </div>
            </div>
          </div>

          <p className="lg:text-lg text-base sm:text-lg md:text-xl text-gray-700 mb-4">
            Fames metus parturient sapien vitae ante cum primis habitant egestas taciti, fringilla dis potenti pellentesque dapibus aenean nunc fusce mauris. Enim feugiat purus malesuada tempus aenean rutrum laoreet magna, dis diam tortor pharetra parturient cursus id, velit porttitor habitasse lacus himenaeos odio mattis. Neque aenean malesuada diam ullamcorper , conubia dictumst dis …
          </p>
          <button className="bg-white border border-black text-black font-semibold px-6 py-2 rounded hover:bg-gray-100">
            Read More
          </button>
        </div>

        {/* Post 3 */}
        <div className="w-full">
          <img src={image3} alt="Timeless Leather Accessories" className="w-full h-auto rounded-md mb-4 max-w-full" />
          <h3 className="text-xl text-black mb-2">Fashion and Style</h3>
          <h4 className="text-2xl font-semibold text-black mb-1">Timeless Leather Accessories to Elevate Your Style</h4>

          <div className="flex flex-wrap items-center justify-between text-gray-500 text-xl mb-4 gap-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FaUser className="mr-1" />
                <span>wpthemes</span>
              </div>
              <div className="flex items-center">
                <FaRegCalendarAlt className="mr-1" />
                <span>January 30, 2025</span>
              </div>
            </div>
            <div className="relative">
              <FaMessage className="text-black text-xl" />
              <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </div>
            </div>
          </div>

          <p className="lg:text-lg text-base sm:text-lg md:text-xl text-gray-700 mb-4">
            Iaculis placerat ad pharetra morbi metus eu nec ac, senectus est vehicula molestie ornare auctor eget magnis, in per lectus posuere cursus blandit condimentum. Porta class magna dignissim vel lacinia, donec sociosqu dis congue pulvinar facilisi, luctus velit nullam semper. Turpis primis lobortis viverra nisi lacus pulvinar nostra etiam aliquet, nulla augue mi ac vel …
          </p>
          <button className="bg-white border border-black text-black font-semibold px-6 py-2 rounded hover:bg-gray-100">
            Read More
          </button>
        </div>

        {/* Post 4 */}
        <div className="w-full">
          <img src={image4} alt="Leather Care Guide" className="w-full h-auto rounded-md mb-4 max-w-full" />
          <h3 className="text-xl text-black mb-2">Leather Care and Maintenance</h3>
          <h4 className="text-2xl font-semibold text-black mb-1">How to Care for Your Leather Products: A Complete Guide</h4>

          <div className="flex flex-wrap items-center justify-between text-gray-500 text-xl mb-4 gap-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FaUser className="mr-1" />
                <span>wpthemes</span>
              </div>
              <div className="flex items-center">
                <FaRegCalendarAlt className="mr-1" />
                <span>January 28, 2025</span>
              </div>
            </div>
            <div className="relative">
              <FaMessage className="text-black text-xl" />
              <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </div>
            </div>
          </div>

          <p className=" lg:text-lg text-base sm:text-lg md:text-xl text-gray-700 mb-4">
            Lacinia nulla aliquam inceptos sociosqu pellentesque dictumst lectus vitae, natoque facilisi orci sem habitant cursus dis diam, felis etiam magnis nunc libero imperdiet luctus. Hendrerit lectus quisque quam tortor mi consequat suscipit facilisis tristique neque semper, cubilia mus dignissim nec dis tempus accumsan ultrices suspendisse duis id, parturient augue a montes massa posuere nulla taciti …
          </p>
          <button className="bg-white border border-black text-black font-semibold px-6 py-2 rounded hover:bg-gray-100">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
