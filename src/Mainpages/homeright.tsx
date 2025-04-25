import React from 'react';
import { useNavigate } from 'react-router-dom';
import rightSidebarImg from '../webassets/Grey-Summer-sale-Monochrome-leather-bag-Instagram-Story-2.jpg';
import productImg1 from '../webassets/p8-1.jpg';
import productImg2 from '../webassets/p10-1.jpg';
import productImg3 from '../webassets/p11-1.jpg';
import productImg4 from '../webassets/p9-1.jpg';
import productImg5 from '../webassets/p6-1-1.jpg';
import mariaImg from '../webassets/image-6.png';
import bag from '../webassets/p14-1.jpg';
import { useCart } from '../Cartcontext/Cartcontexr'; 

const RightSidebar: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); 

  const handleAddToCart = (item: { id: number; title: string; image: string; price: string }) => {
    const numericPrice = parseFloat(item.price.replace('$', '')); 
    addToCart({ id: item.id, name: item.title, price: numericPrice, image: item.image });
  };

  const miniCards = [
    { id: 1, name: 'Torquent', price: '$138.00 $125.00', image: productImg1 },
    { id: 2, name: 'Dictum', price: '$189.00 $249.00', image: productImg2 },
    { id: 3, name: 'Scrntius', price: '$163.00', image: productImg3 },
    { id: 4, name: 'Duriseum', price: '$175.00 $168.00', image: productImg4 },
    { id: 5, name: 'Vivams', price: '$189.00', image: productImg5 },
  ];

  const productItems = [
    {
      id: 101,
      title: 'Leather Bag',
      price: '$129.99',
      image: bag,
    },
  ];

  return (
    <div className="w-full lg:w-1/5 px-2 mt-14 lg:mt-14">
      {/* Promo Image */}
      <div className="w-full lg:w-[280px] mx-auto mb-6">
        <img
          src={rightSidebarImg}
          alt="Sale Image"
          className="w-full h-100 object-cover shadow-md border border-gray-300"
        />
      </div>

      {/* Leather Bag Card */}
      {productItems.map((item, index) => (
        <div key={index} className="w-full lg:w-[280px] mx-auto mb-6 mt-12">
          <div className="border border-gray-200 shadow-md overflow-hidden bg-white flex flex-col hover:shadow-xl transition duration-300">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
              onClick={() => navigate(`/product/${item.id}`)} 
            />
            <div className="p-4 flex flex-col items-center text-center">
              <p className="text-xl font-semibold">{item.title}</p>
              <p className="text-gray-600 mt-1 text-lg">{item.price}</p>
              <button
                className="mt-3 px-5 py-3 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Mini Product Cards */}
      <div className="space-y-4 mb-6">
        {miniCards.map((item, index) => {
          const isSplitPrice = index === 0 || index === 3;
          const prices = item.price.split(' ');
          const originalPrice = prices[1] || prices[0];
          const discountedPrice = prices[0];

          return (
            <div
              key={index}
              className="flex items-center w-full lg:w-[280px] mx-auto border border-gray-300 bg-white cursor-pointer mt-4"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-20 object-cover mr-3"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <div className="flex items-center">
                  {isSplitPrice ? (
                    <>
                      <p className="text-sm text-gray-600 line-through mr-2">{originalPrice}</p>
                      <p className="text-sm text-gray-800">{discountedPrice}</p>
                    </>
                  ) : (
                    <p className="text-sm text-gray-800">{item.price}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Testimonial Card */}
      <div className="w-full lg:w-[280px] mx-auto border border-gray-300 shadow-md bg-white p-3 mt-12">
        <div className="p-3">
          <p className="text-lg text-gray-600 mb-4">
            Scelerisque tempus luctus leo placerat lobortis ornare pharetra
            condimentum vel, curae ligula gravida platea tortor nostra eleifend
            duis non, in risus felis sapien nec etiam justo netus.
          </p>
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-2">
            <img
              src={mariaImg}
              alt="Maria"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-2xl font-semibold">Maria</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
