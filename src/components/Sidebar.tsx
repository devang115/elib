import React, { useState } from 'react';
import { Book, User, UserPlus, List, TrendingUp, Library, Search, PlusCircle, HelpCircle, Code, Users, Menu, X } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-20 p-2 bg-blue-500 text-white rounded-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className={`fixed top-0 left-0 h-full bg-gray-100 w-64 p-4 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-10`}>
        <h2 className="text-xl font-bold mb-4 mt-12">My Open Library</h2>
        <nav>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center"><User className="mr-2" size={18} /> Log In</a></li>
            <li><a href="#" className="flex items-center"><UserPlus className="mr-2" size={18} /> Sign Up</a></li>
            <li><a href="#" className="flex items-center"><Book className="mr-2" size={18} /> Browse</a></li>
            <li><a href="#" className="flex items-center"><List className="mr-2" size={18} /> Subjects</a></li>
            <li><a href="#" className="flex items-center"><TrendingUp className="mr-2" size={18} /> Trending</a></li>
            <li><a href="#" className="flex items-center"><Library className="mr-2" size={18} /> Library Explorer</a></li>
            <li><a href="#" className="flex items-center"><List className="mr-2" size={18} /> Lists</a></li>
            <li><a href="#" className="flex items-center"><Book className="mr-2" size={18} /> Collections</a></li>
            <li><a href="#" className="flex items-center"><Book className="mr-2" size={18} /> K-12 Student Library</a></li>
            <li><a href="#" className="flex items-center"><User className="mr-2" size={18} /> Book Talks</a></li>
            <li><a href="#" className="flex items-center"><Book className="mr-2" size={18} /> Random Book</a></li>
            <li><a href="#" className="flex items-center"><Search className="mr-2" size={18} /> Advanced Search</a></li>
            <li className="pt-4"><h3 className="font-semibold">Contribute</h3></li>
            <li><a href="#" className="flex items-center"><PlusCircle className="mr-2" size={18} /> Add a Book</a></li>
            <li><a href="#" className="flex items-center"><List className="mr-2" size={18} /> Recent Community Edits</a></li>
            <li className="pt-4"><h3 className="font-semibold">Resources</h3></li>
            <li><a href="#" className="flex items-center"><HelpCircle className="mr-2" size={18} /> Help & Support</a></li>
            <li><a href="#" className="flex items-center"><Code className="mr-2" size={18} /> Developer Center</a></li>
            <li><a href="#" className="flex items-center"><Users className="mr-2" size={18} /> Librarians Portal</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;