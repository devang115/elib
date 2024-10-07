import React, { useState } from 'react';
import { Book, ChevronDown, User, UserPlus, List, TrendingUp, Library, Search, PlusCircle, HelpCircle, Code, Users } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href="#" className="text-xl font-bold">E-Library</a>
          <a href="#" className="flex items-center"><Book className="mr-2" size={18} /> My Books</a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center focus:outline-none"
            >
              Browse <ChevronDown className="ml-1" size={18} />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Subjects</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Trending</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Library Explorer</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Lists</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Collections</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">K-12 Student Library</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Book Talks</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Random Book</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Advanced Search</a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center"><User className="mr-1" size={18} /> Log In</a>
          <a href="#" className="flex items-center"><UserPlus className="mr-1" size={18} /> Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;