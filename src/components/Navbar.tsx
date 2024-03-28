import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent py-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-gray-800 text-lg font-bold">Your Website</span>
            </div>
            <div className="hidden md:flex">
              <a href="#" className="text-gray-800 mr-4">Home</a>
              <a href="#" className="text-gray-800 mr-4">About</a>
              <a href="#" className="text-gray-800 mr-4">Projects</a>
              <a href="#" className="text-gray-800">Blog</a>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 focus:outline-none focus:text-gray-800"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-gray-800 py-2">
            <a href="#" className="block text-gray-800 py-2 px-4">Home</a>
            <a href="#" className="block text-gray-800 py-2 px-4">About</a>
            <a href="#" className="block text-gray-800 py-2 px-4">Projects</a>
            <a href="#" className="block text-gray-800 py-2 px-4">Blog</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
