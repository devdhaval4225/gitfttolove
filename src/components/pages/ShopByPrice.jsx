import React from 'react';

const priceRanges = [
  {
    id: 1,
    price: 49,
    products: 1587,
    image: 'https://www.gifttolove.in/cdn/shop/files/Under_49_360x.png?v=1732545421', 
  },
  {
    id: 2,
    price: 99,
    products: 1706,
    image: 'https://www.gifttolove.in/cdn/shop/files/Under_99_360x.png?v=1732545595',
  },
  {
    id: 3,
    price: 149,
    products: 960,
    image: 'https://www.gifttolove.in/cdn/shop/files/Under_149_360x.png?v=1732545722',
  },
  {
    id: 4,
    price: 199,
    products: 719,
    image: 'https://www.gifttolove.in/cdn/shop/files/Under_199_360x.png?v=1732545895',
  },
];

const ShopByPrice = () => {
  return (
    <div className="py-10 bg-white text-center">
      <h2 className="text-2xl font-bold text-gray-800">Shop By Price</h2>
      <p className="text-sm italic text-gray-500 mt-1">Best Affordable Price in India</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12 mx-auto max-w-7xl">
        {priceRanges.map(({ id, price, products, image }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={image}
              alt={`Under ₹${price}`}
              className="w-70 rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-md">Under ₹ {price}</h3>
              <p className="text-gray-500 text-sm">{products} products</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByPrice;