import React from "react";

const Menu = () => {
  return (
    <div className="menu duration-500 z-[10]  w-full grid md:grid-cols-2 h-full fixed translate-x-[100%]">
      <div className="md:block hidden left backdrop-blur-sm" />
      <div className="right bg-[#F7F3F2] overflow-y-auto pl-4 lg:px-10">
        <ul className="py-5 pt-14  mt-10 text-2xl md:text-4xl">
          <li className="text-gray-800 hover:text-[gray] duration-300">
            <a className="" href="#">
              Home
            </a>
          </li>
          <li className="mt-9 text-gray-800 hover:text-[gray] duration-300">
            <a className="" href="#">
              About
            </a>
          </li>
          <li className="mt-9 text-gray-800 hover:text-[gray] duration-300">
            <a className="" href="#">
              Properties
            </a>
          </li>
          <li className="mt-9 text-gray-800 hover:text-[gray] duration-300">
            <a className="" href="#">
              Blog
            </a>
          </li>
          <li className="mt-9 text-gray-800 hover:text-[gray] duration-300">
            <a className="" href="#">
              Services
            </a>
          </li>
          <li className="mt-9 text-gray-800 hover:text-[gray] duration-300">
            <a className="" href="#">
              Contact
            </a>
          </li>
        </ul>
        <div className="input pt-5">
          <input
            type="text"
            placeholder="Search Property"
            class="outline-none bg-transparent border border-black px-6 py-3 text-base"
          />
          <button class="bg-[#FEDC71] px-6 py-3 font-[300] border-2 border-[#FEDC71] hover:bg-black hover:text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
