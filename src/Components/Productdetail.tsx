import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Cartcontext/Cartcontexr";
import { extendedProducts } from "../Mainpages/Shop";
import bannerImg from '../webassets/image-4-1.jpg'; 

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || "0");
  const product = extendedProducts.find((p) => p.id === productId);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!product) {
    return <div className="text-center text-xl mt-10">Product not found</div>;
  }

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>(product.size || "");
  const [selectedLeather, setSelectedLeather] = useState<string>(product.leather || "");

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace(/[^0-9.]/g, "")),
      image: product.img,
      quantity,
      size: selectedSize,
      leather: selectedLeather,
    };

    addToCart(productToAdd);
  };

  return (
    <div className="bg-gray-50">
      <div className="relative w-full">
        <img
          src={bannerImg}
          alt="Product Banner"
          className="w-full h-64 md:h-96 object-cover object-center inset-0 bg-black opacity-70 "
        />
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <h1 className="text-white text-md md:text-3xl font-semibold  px-6 py-3 rounded">
            Home / Products / {product.name}
          </h1>
        </div>
      </div>

      {/* ✅ Product Detail Section */}
      <div className="p-4 md:p-8 lg:p-16">
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
          {/* Product Image */}
          <div className="w-full md:w-[600px]">
            <img
              src={product.img}
              alt={product.name}
              className="object-cover rounded-lg w-full h-[400px] md:h-[600px]"
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-xl text-gray-700 mb-2">{product.price}</p>
            <p className="text-gray-600 text-xl mb-4">{product.description}</p>

            {product.category === "jacket" && (
              <>
                {/* Size Selection */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Size</h3>
                  <div className="flex flex-wrap gap-4">
                    {["Small", "Medium", "Large", "Extra Large"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-2 rounded-md border-2 ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Leather Type */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Leather Type</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {["Full-Grain Leather", "Genuine Leather", "Top-Grain Leather", "Exotic Leather"].map(
                      (leather) => (
                        <button
                          key={leather}
                          onClick={() => setSelectedLeather(leather)}
                          className={`px-6 py-2 rounded-md border-2 ${selectedLeather === leather
                              ? "bg-black text-white"
                              : "bg-white text-black"
                            }`}
                        >
                          {leather}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Quantity & Add to Cart */}
            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center border border-black rounded overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-3 text-sm"
                >
                  -
                </button>
                <div className="px-5 py-3 text-sm bg-white border-l border-r border-black">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-3 text-sm"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-12 py-4 rounded-lg hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
