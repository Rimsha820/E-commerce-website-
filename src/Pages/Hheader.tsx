import { useEffect, useState } from "react";
import image1 from "../webassets/hero1-1.jpg";
import image2 from "../webassets/hro2-1.jpg";
import image3 from "../webassets/hro3-1.jpg";
import HomeContent from '../Mainpages/Home'; 

function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center text-center bg-cover bg-center p-4 sm:p-6 md:p-8"
        style={{
          backgroundImage: `url(${images[imageIndex]})`,
          height: "60vh",
        }}
      >
        {/* Subheading */}
        <p className="text-xl sm:text-lg md:text-xl lg:text-4xl font-medium text-white drop-shadow-md mb-2 sm:mb-4">
          Luxury Leather for Every Journey
        </p>

        {/* Main Heading */}
        <div className="text-white shadow-md leading-tight text-center">
          <p className="font-semibold drop-shadow-lg">
            <span className="block text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
              Timeless Craftsmanship in Every
            </span>
            <span className="block text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl mt-1">
              Stitch
            </span>
          </p>
        </div>
        <button className="mt-6 sm:mt-8 bg-white text-black py-2 px-4 sm:py-3 sm:px-6 font-semibold rounded-md hover:bg-gray-200 transition duration-300 shadow-md text-sm sm:text-base md:text-lg">
          Shop Now
        </button>
      </div>
      <HomeContent />
    </div>
  );
}

export default Home;
