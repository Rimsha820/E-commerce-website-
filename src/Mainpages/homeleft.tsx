import React from "react";
import aboutImg from "../webassets/imagevdds-1.jpg";
import promoImg from "../webassets/Dark-Minimal-Casual-Fashion-Collection-Shop-Now-Your-Story-1.jpg";
import latestPostImg from "../webassets/blg2-1.jpg";
import productImg1 from "../webassets/p5-1-300x300.jpg";
import productImg2 from "../webassets/p14-1-300x300.jpg";
import productImg3 from "../webassets/p3-1-300x300.jpg";
import productImg4 from "../webassets/p2-1-300x300.jpg";
import productImg5 from "../webassets/p1-1-300x300.jpg";
import { useNavigate } from 'react-router-dom';

const miniCards = [
  { id: 6, name: "Viverra", price: "$139.00", image: productImg1 },
  { id: 7, name: "Lobortis", price: "$120.00", image: productImg2 },
  { id: 8, name: "Nibhaclus", price: "$149.00", image: productImg3 },
  { id: 9, name: "Portogal", price: "$99.00", image: productImg4 },
  { id: 10, name: "Senectus", price: "$120.00", image: productImg5 },
];

const LeftSidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-1/5 px-2 mb-6 mt-14 lg:mb-0">
      {/* About Card */}
      <div className="border border-gray-300 bg-white shadow-md overflow-hidden w-full lg:w-[280px] mx-auto mb-6">
        <img
          src={aboutImg}
          alt="About Us"
          className="w-full h-72 object-cover cursor-pointer"
          onClick={() => navigate('/about')} 
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-gray-700 mb-4 text-md leading-relaxed">
            Mattis neque potenti duis suspendisse tellus fermentum nisi placerat
            taciti, faucibus metus curabitur donec mauris cursus posuere lectus
            curae dictumst, nascetur class aptent ante fusce aenean quis
            eleifend.
          </p>
          <p
            className="text-md font-bold text-black underline cursor-pointer hover:text-gray-800 transition"
            onClick={() => navigate('/about')}
          >
            Know More
          </p>
        </div>
      </div>

      {/* Promo Image */}
      <div className="w-full lg:w-[280px] mx-auto mb-6">
        <img
          src={promoImg}
          alt="Promo"
          className="w-full h-110 object-cover shadow-md border border-gray-300"
        />
      </div>

      {/* Mini Product Cards with Navigation */}
      <div className="space-y-4 mb-6">
        {miniCards.map((item) => (
          <div
            key={item.id}
            className="flex items-center w-full lg:w-[280px] mx-auto border border-gray-300 bg-white cursor-pointer"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-20 object-cover mr-3"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Post Card */}
      <div className="w-full lg:w-[280px] mx-auto border border-gray-300 bg-white shadow-md mb-6">
        <h2 className="text-xl font-bold px-4 pt-4">Latest Post</h2>
        <div className="p-2 pt-2">
          <div className="pb-3">
            <img
              src={latestPostImg}
              alt="Latest Post"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <h3 className="text-lg font-semibold mb-1">
            The Journey to Sustainable Leather: What You Should Know
          </h3>
          <p className="text-sm text-gray-500 mb-2">January 30, 2025</p>
          <p className="text-md text-gray-700 mb-3">
            Nisl platea malesuada ullamcorper senectus nostra ut condimentum,
          </p>
          <p
            className="text-md text-black font-semibold cursor-pointer hover:text-gray-800 transition"
            onClick={() => navigate('/blog/leather-journey')}
          >
            Read More &gt;&gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
