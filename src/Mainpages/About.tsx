import React from 'react';
import LeatherShopImage from '../webassets/image-4-1-1.jpg';
import GenuineLeatherImage from '../webassets/image-8-1.jpg';
import CoreValuesBg from '../webassets/bgtt-1-1.jpg';
import CoreImg1 from '../webassets/image-5-1.jpg';
import CoreImg2 from '../webassets/image-6-1.jpg';
import CoreImg3 from '../webassets/image-7-1.jpg';

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-16 py-12 bg-gray-50 space-y-16">

        {/* About Leather Shop Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">About Leather Shop</h3>
            <p className="text-sm sm:text-base lg:text-md text-gray-700 mb-4">
            Scelerisque ut auctor parturient pretium a, mollis dapibus sed vehicula lectus senectus, phasellus accumsan ultrices mi. Tristique turpis taciti tincidunt curabitur aliquet pharetra gravida sollicitudin aliquam, aptent at felis commodo suscipit est nec sociis eu, bibendum nam sociosqu vehicula ornare cubilia ac habitasse.
            </p>
            <p className="text-sm sm:text-base lg:text-md text-gray-700 mb-4">
              Dictum hendrerit enim ante phasellus tristique fringilla felis elementum nibh ornare, hac laoreet sociis porttitor ut mattis tortor suscipit. Dapibus habitant dui montes cum penatibus aenean dignissim tempor platea porttitor, id etiam per suscipit eget elementum iaculis metus.
            </p>
          </div>
          <div>
            <img
              src={LeatherShopImage}
              alt="Leather Shop"
              className="w-full h-auto max-h-[450px] object-cover rounded-sm shadow-md"
            />
          </div>
        </div>

        {/* 100% Genuine Leather Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={GenuineLeatherImage}
              alt="Genuine Leather"
              className="w-full h-auto max-h-[450px] object-cover rounded-sm shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">100% Genuine Leather</h3>
            <p className="text-sm sm:text-base lg:text-md text-gray-700 mb-4">
              Tristique turpis taciti tincidunt curabitur aliquet pharetra gravida sollicitudin aliquam, aptent at felis commodo suscipit est nec sociis eu, bibendum nam sociosqu vehicula ornare cubilia ac habitasse. Scelerisque ut auctor parturient pretium a, mollis dapibus sed vehicula lectus senectus, phasellus accumsan ultrices mi.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="w-full">
        <div className="relative w-full h-[250px] sm:h-[300px] flex items-center justify-center text-center px-4 sm:px-6">
          <img
            src={CoreValuesBg}
            alt="Core Values Background"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-2xl sm:text-4xl font-semibold text-white mb-4">Our Core Values</h3>
            <p className="text-sm sm:text-base text-white">
              Dapibus habitant dui montes cum penatibus aenean dignissim tempor platea porttitor, id etiam per suscipit eget elementum iaculis metus. Dictum hendrerit enim ante phasellus tristique fringilla felis elementum nibh ornare, hac laoreet sociis porttitor ut mattis tortor suscipit.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Core Card 1 */}
          <div className="relative group overflow-hidden rounded shadow-md h-[280px] sm:h-[320px]">
            <img
              src={CoreImg1}
              alt="Core Feature 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#3b2322] bg-opacity-90 flex items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="transform -translate-x-10 group-hover:translate-x-0 transition-all duration-500 ease-out text-white">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Innovation & Design</h4>
                <p className="text-xs sm:text-sm">
                  Leo ullamcorper condimentum pulvinar ridiculus pretium lobortis montes vivamus accumsan volutpat arcu interdum.
                </p>
              </div>
            </div>
          </div>

          {/* Core Card 2 */}
          <div className="relative group overflow-hidden rounded shadow-md h-[280px] sm:h-[320px]">
            <img
              src={CoreImg2}
              alt="Core Feature 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#3b2322] bg-opacity-90 flex items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="transform -translate-x-10 group-hover:translate-x-0 transition-all duration-500 ease-out text-white">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Our Goals</h4>
                <p className="text-xs sm:text-sm">
                  Ultrices facilisis mauris nunc primis purus arcu tempor varius ultricies suscipit, morbi dis ad tristique curae.
                </p>
              </div>
            </div>
          </div>

          {/* Core Card 3 */}
          <div className="relative group overflow-hidden rounded shadow-md h-[280px] sm:h-[320px]">
            <img
              src={CoreImg3}
              alt="Core Feature 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#3b2322] bg-opacity-90 flex items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="transform -translate-x-10 group-hover:translate-x-0 transition-all duration-500 ease-out text-white">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Our Specials</h4>
                <p className="text-xs sm:text-sm">
                  Varius ultricies suscipit, morbi dis ad tristique curae dapibus euismod erat platea. Ultrices facilisis mauris nunc primis.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutUs;
