// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav class="bg-white border-gray-200 ">
//       <div class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between py-4">
//         <span class="self-center text-2xl font-semibold whitespace-nowrap">
//           Saudi-Hop Admin Panel
//         </span>
//         <button
//           data-collapse-toggle="navbar-default"
//           type="button"
//           class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
//           aria-controls="navbar-default"
//           aria-expanded="false">
//           <span class="sr-only">Open main menu</span>
//           <svg
//             class="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14">
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//           <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
//             <li>
//               <Link
//                 to="/manage-blogs"
//                 class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
//                 Manage Blogs
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/manage-hotels"
//                 class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
//                 Manage Hotels
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/manage-faqs"
//                 class="block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:p-0 "
//                 aria-current="page">
//                 Manage Faqs
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between py-4 px-6">
        <span className="self-center text-2xl font-semibold">
          Saudi-Hop Admin Panel
        </span>

        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-6 text-gray-900">
            <li>
              <Link to="/manage-package" className="hover:text-blue-700">
                Manage Package
              </Link>
            </li>
            <li>
              <Link to="/manage-blogs" className="hover:text-blue-700">
                Manage Blogs
              </Link>
            </li>
            <li>
              <Link to="/manage-hotels" className="hover:text-blue-700">
                Manage Hotels
              </Link>
            </li>
            <li>
              <Link to="/manage-faqs" className="hover:text-blue-700">
                Manage FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Side Panel */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-100 bg-opacity-20 z-50"
          onClick={toggleMenu}></div>
      )}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 md:hidden`}>
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
            <FiX size={24} />
          </button>
          <ul className="mt-8 space-y-4 text-gray-900">
            <li>
              <Link
                to="/manage-blogs"
                className="block p-2 hover:bg-gray-100"
                onClick={toggleMenu}>
                Manage Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/manage-hotels"
                className="block p-2 hover:bg-gray-100"
                onClick={toggleMenu}>
                Manage Hotels
              </Link>
            </li>
            <li>
              <Link
                to="/manage-faqs"
                className="block p-2 hover:bg-gray-100"
                onClick={toggleMenu}>
                Manage FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
