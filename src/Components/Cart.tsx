import React from 'react';
import { FaShoppingBag, FaTrash } from 'react-icons/fa';
import { useCart } from '../Cartcontext/Cartcontexr';

interface CartProps {
  onClose: () => void;
}


const Cart: React.FC<CartProps> = ({ onClose }) => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 h-full w-full sm:w-3/4 md:w-2/5 lg:w-110 bg-gray-100 z-50 overflow-y-auto flex flex-col">
      {/* Header */}
      <div className="bg-white p-4  top-0 z-10">
        <button onClick={onClose} className="text-2xl text-black absolute top-2 left-2">&times;</button>
        <div className="flex items-center text-black justify-center gap-2 text-xl font-semibold">
          <FaShoppingBag /> Your Cart
        </div>
      </div>

      {/* Cart Items */}
      <div className="p-4 flex-1 overflow-y-auto">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="bg-white p-3 mb-4 flex flex-col shadow-sm rounded">
                <div className="flex">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-1 ml-3 relative">
                    <div className="font-normal text-md">{item.name}</div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-0 right-0 text-black hover:text-red-700"
                      title="Remove"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-gray-700">Quantity:</span>
                    <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 hover:bg-gray-300 text-sm text-black"
                      >
                        -
                      </button>
                      <div className="px-2 text-sm bg-white border-l border-gray-200 border-r text-black">
                        {item.quantity}
                      </div>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-2 hover:bg-gray-300 text-sm text-black"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="font-semibold text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Subtotal & Buttons Full-Width */}
      {cartItems.length > 0 && (
        <div className="bg-white w-full mt-auto">
          <div className="flex justify-between items-center px-4 py-3 text-md font-semibold text-gray-800 border-t border-gray-200">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex gap-2 px-4 pb-4">
            <button className="w-1/2 bg-white border border-gray-400 text-black py-2 rounded hover:bg-gray-100 transition">
              View Cart
            </button>
            <button className="w-1/2 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
