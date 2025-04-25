import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../Cartcontext/Cartcontexr';
import { useNavigate } from 'react-router-dom';
import product1 from '../webassets/p10-1.jpg';
import product2 from '../webassets/p12-1.jpg';
import product3 from '../webassets/p4-1-300x300.jpg';
import product4 from '../webassets/p7-1.jpg';
import product5 from '../webassets/p9-1.jpg';
import product6 from '../webassets/p1-1-300x300.jpg';
import product7 from '../webassets/p20-1.jpg';
import product8 from '../webassets/p21-1.jpg';
import product9 from '../webassets/p5-1-300x300.jpg';
import product10 from '../webassets/p16-1.jpg';
import product11 from '../webassets/p14-1.jpg';
import product12 from '../webassets/p2-1-300x300.jpg';
import product13 from '../webassets/p13-1.jpg';
import product14 from '../webassets/p19-1.jpg';
import product15 from '../webassets/p18-1.jpg';

const productImgs = [
    product1, product2, product3, product4, product5,
    product6, product7, product8, product9, product10,
    product11, product12, product13, product14, product15,
];

const baseProducts = [
    { name: 'Dictum', price: '$189.00', size: 'Large', leather: 'Full-Grain Leather', color: 'Black' },
    { name: 'Integer', price: '$124.00', size: 'Medium', leather: 'Genuine Leather', color: 'Brown' },
    { name: 'Lobortis', price: '$120.00', size: 'Small', leather: 'Top-Grain Leather', color: 'Dark Brown' },
    { name: 'Pharetra', price: '$229.00', size: 'Large', leather: 'Exotic Leather', color: 'Light Brown' },
    { name: 'Quisque', price: '$159.00', size: 'Medium', leather: 'Full-Grain Leather', color: 'Black' },
    { name: 'Senectus', price: '$120.00', size: 'Extra Large', leather: 'Genuine Leather', color: 'Brown' },
    { name: 'Vivamus', price: '$137.00', size: 'Small', leather: 'Top-Grain Leather', color: 'Dark Brown' },
    { name: 'Sodales', price: '$170.00', size: 'Medium', leather: 'Full-Grain Leather', color: 'Black' },
    { name: 'Viverra', price: '$139.00', size: 'Large', leather: 'Exotic Leather', color: 'Light Brown' },
    { name: 'Arcu', price: '$149.00', size: 'Medium', leather: 'Top-Grain Leather', color: 'Black' },
    { name: 'Curabitur', price: '$199.00', size: 'Large', leather: 'Full-Grain Leather', color: 'Brown' },
    { name: 'Ultrices', price: '$210.00', size: 'Small', leather: 'Genuine Leather', color: 'Dark Brown' },
    { name: 'Tempus', price: '$185.00', size: 'Medium', leather: 'Exotic Leather', color: 'Black' },
    { name: 'Nullam', price: '$165.00', size: 'Large', leather: 'Full-Grain Leather', color: 'Brown' },
    { name: 'Mauris', price: '$142.00', size: 'Small', leather: 'Top-Grain Leather', color: 'Light Brown' },
    { name: 'Egestas', price: '$155.00', size: 'Medium', leather: 'Full-Grain Leather', color: 'Black' },
    { name: 'Pulvinar', price: '$134.00', size: 'Extra Large', leather: 'Genuine Leather', color: 'Dark Brown' },
];

const Shop: React.FC = () => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
    const [currentPage] = useState(1);
    const productsPerPage = 15;

    const extendedProducts = Array.from({ length: 15 }, (_, i) => {
        const base = baseProducts[i % baseProducts.length];
        return {
            ...base,
            id: i + 1,
            img: productImgs[i % productImgs.length],
            description:
                'Malesuada erat dapibus eu auctor cras quisque bibendum enim urna nec aliquam est sociis, condimentum cubilia integer et feugiat porttitor euismod nibh dictum arcu quam.',
        };
    });

    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = extendedProducts.slice(indexOfFirst, indexOfLast);
    return (
        <div className=" ">
            <div className="flex flex-col gap-8">
                {/* Product Grid */}
                <div className="w-full lg:w-[730px] mx-auto">
                    <div className="flex justify-between items-center mb-6">
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                        {currentProducts.map((product) => (
                            <div key={product.id} className="relative group overflow-hidden border border-gray-200 p-2  hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        onClick={() => navigate(`/product/${product.id}`)}
                                        className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                                    />
                                    <button
                                        className="absolute bottom-0 left-0 w-full bg-black text-white text-sm py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        onClick={() => setSelectedProduct(product)}
                                    >
                                        Quick View
                                    </button>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <p className="text-gray-800 font-semibold text-lg">{product.name}</p>
                                        <p className="text-gray-600 text-md">{product.price}</p>
                                    </div>
                                    <button
                                        className="bg-black text-white p-3 rounded-full"
                                        onClick={() =>
                                            addToCart({
                                                id: product.id,
                                                name: product.name,
                                                price: parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0,
                                                image: product.img,
                                            })
                                        }
                                    >
                                        <ShoppingCart size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick View Popup */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-md max-w-4xl w-full flex flex-col md:flex-row relative">
                        <button
                            className="absolute top-4 right-4 bg-black text-white rounded-full w-7 h-7 flex items-center justify-center hover:scale-105 transition"
                            onClick={() => setSelectedProduct(null)}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedProduct.img}
                            alt={selectedProduct.name}
                            className="w-full md:w-1/2 h-auto object-cover rounded"
                        />
                        <div className="p-4 md:p-6 flex-1 ">
                            <h2 className="text-2xl font-semibold mb-2">{selectedProduct.name}</h2>
                            <p className="text-xl text-gray-700 mb-4">{selectedProduct.price}</p>
                            <p className="text-gray-600 mb-4">
                                Malesuada erat dapibus eu auctor cras quisque bibendum enim urna nec aliquam est sociis,
                                condimentum cubilia integer et feugiat porttitor euismod nibh dictum arcu quam.
                            </p>
                            <div>
                                <h4 className="text-md font-semibold mb-2">Size</h4>
                                <div className="grid grid-cols-3 gap-2">
                                    {['Extra Large', 'Large', 'Medium', 'Small'].map((size) => (
                                        <button
                                            key={size}
                                            className="border px-3 py-1 rounded hover:bg-black hover:text-white transition col-span-1"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <button
                                className="mt-6 text-sm text-red-500 underline md:hidden"
                                onClick={() => setSelectedProduct(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shop;
