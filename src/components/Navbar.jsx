import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
             <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Talking Avatar</h1>
        
        {/* Hamburger Menu (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="text-white hover:underline">Login</Link>
          <Link to="/register" className="text-white hover:underline">Register</Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 p-2">
          <Link to="/login" className="block text-white py-2 hover:bg-blue-700">Login</Link>
          <Link to="/register" className="block text-white py-2 hover:bg-blue-700">Register</Link>
        </div>
      )}
    </nav>
        </div>
    );
};

export default Navbar;