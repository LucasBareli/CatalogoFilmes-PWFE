import React from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

const NavBar = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-black/70">
    <div className="flex items-center space-x-4">
      <h1 className="text-2xl font-bold text-lime-400">WATCH tv</h1>
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-lime-400">Home</a>
        <a href="#" className="hover:text-lime-400">My List</a>
        <a href="#" className="hover:text-lime-400">Movies</a>
        <a href="#" className="hover:text-lime-400">New Releases</a>
      </nav>
    </div>
    
    <div className="flex items-center space-x-4">
      <div className="relative">
        <input placeholder="Search" className="pl-8 bg-black/50 text-white rounded-md" />
        <AiOutlineSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <button className="hover:text-lime-400">Help</button>
      <AiOutlineUser className="w-6 h-6 text-lime-400" />
    </div>
    </div>
    )
}

export default NavBar;