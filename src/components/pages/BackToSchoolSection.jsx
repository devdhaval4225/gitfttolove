import React from "react";

const products = [
  {
    id: "F2504",
    name: "F2504 Soft Fur Diary A5",
    image: "https://www.gifttolove.in/cdn/shop/files/F2504_360x.jpg?v=1741348753",
    discount: 77,
    originalPrice: 682.0,
    salePrice: 160.0,
  },
  {
    id: "Mg25-18",
    name: "Mg25-18 Soft Fur Diary A5",
    image: "https://www.gifttolove.in/cdn/shop/files/F2518_7b3554cf-0ba7-4fc7-95c7-558f7092e473_360x.jpg?v=1741348749",
    discount: 72,
    originalPrice: 720.0,
    salePrice: 205.0,
  },
  {
    id: "F2521",
    name: "F2521 Soft Fur Diary A5",
    image: "https://www.gifttolove.in/cdn/shop/files/F2521_360x.jpg?v=1741348750",
    discount: 74,
    originalPrice: 803.0,
    salePrice: 214.0,
  },
  {
    id: "F2520",
    name: "F2520 Soft Fur Diary A5",
    image: "https://www.gifttolove.in/cdn/shop/files/F2520_360x.jpg?v=1741348751",
    discount: 59,
    originalPrice: 406.0,
    salePrice: 169.0,
  },
  {
    id: "F2520",
    name: "F2520 Soft Fur Diary A5",
    image: "https://www.gifttolove.in/cdn/shop/files/F2502_360x.jpg?v=1741348752",
    discount: 59,
    originalPrice: 406.0,
    salePrice: 169.0,
  },
  {
    id: "F2520",
    name: "F2520 Soft Fur Diary A5",
    image: "https://www.gifttolove.in/cdn/shop/files/F2517_360x.jpg?v=1741348758",
    discount: 59,
    originalPrice: 406.0,
    salePrice: 169.0,
  },
  {
    id: "F2520",
    name: "F2520 Soft Fur Diary A5",
    image: "https://www.gifttolove.in/cdn/shop/files/F2524_360x.jpg?v=1741348775",
    discount: 59,
    originalPrice: 406.0,
    salePrice: 169.0,
  },
  {
    id: "F2520",
    name: "F2520 Soft Fur Diary A5",
    image: "https://www.gifttolove.in/cdn/shop/files/F2509_360x.jpg?v=1741348754",
    discount: 59,
    originalPrice: 406.0,
    salePrice: 169.0,
  },
];

const BackToSchoolSection = () => {
  return (
    <div className="px-6 py-12 bg-white">
     
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">BACK TO SCHOOL</h2>
        <p className="text-sm italic text-gray-500 mt-1">UPTO 77% OFF</p>
      </div>

     
      <div className="flex justify-center space-x-4 text-sm mb-8">
        <span className="text-purple-600 font-semibold underline cursor-pointer">Fur Diary</span>
        <span className="text-gray-600">/</span>
        <span className="text-gray-700 cursor-pointer">Colors</span>
        <span className="text-gray-600">/</span>
        <span className="text-gray-700 cursor-pointer">Planner</span>
        <span className="text-gray-600">/</span>
        <span className="text-gray-700 cursor-pointer">Wooden Educational Toys</span>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white rounded shadow-md">
         
            <span className="absolute top-2 right-2 bg-purple-700 text-white text-xs font-bold px-2 py-1 rounded">
              -{product.discount}%
            </span>


            <img
              src={product.image}
              alt={product.name}
              className="w-full  object-cover rounded-t"
            />

        
            <div className="p-4 text-center">
              <h3 className="text-sm font-medium">{product.name}</h3>
              <div className="mt-1 text-sm">
                <span className="line-through text-red-400 mr-2">
                  Rs. {product.originalPrice.toFixed(2)}
                </span>
                <span className="text-blue-700 font-semibold">
                  Rs. {product.salePrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackToSchoolSection;
