import React from 'react'
import { FaBars, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

const nav = () => {
  return (
    <>
       <nav className="flex items-center justify-between px-4 py-2 shadow-md bg-white">
      {/* Left - Menu Icon */}
      <div className="flex items-center gap-3">
        <button className="text-xl">
          <FaBars />
        </button>
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="flex items-center text-pink-500 text-2xl font-bold">
            🎁 <span className="ml-1">Gift to Love</span>
          </div>
          <span className="text-xs text-pink-400 tracking-wide">Craft & Gift Store</span>
        </div>
      </div>

      {/* Center - Search */}
      <div className="flex items-center w-full max-w-2xl mx-4">
        <div className="flex w-full rounded-full overflow-hidden border border-gray-300">
          <select className="px-4 py-2 text-sm border-r outline-none">
            <option>All Categories</option>
            <option>Gifts</option>
            <option>Crafts</option>
          </select>
          <input
            type="text"
            placeholder="I'm shopping for...."
            className="w-full px-4 py-2 outline-none text-sm"
          />
          <button className="bg-purple-300 px-6 text-white text-sm font-semibold hover:bg-purple-400">
            Search
          </button>
        </div>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center space-x-6 text-gray-700">
        <FaUser className="text-lg cursor-pointer" />
        <div className="relative cursor-pointer">
          <FaHeart className="text-lg" />
          <span className="absolute -top-2 -right-2 text-xs bg-purple-300 text-white rounded-full px-1">0</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <FaShoppingCart className="text-lg" />
          <span className="text-sm font-medium">Rs. 0.00</span>
        </div>
      </div>
    </nav>
    </>
  )
}

export default nav
