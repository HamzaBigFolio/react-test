import React from "react";

const Header = () => {
  return (
    <div className="lg:py-[36px] py-[40px] w-full flex justify-between">
      <img src="/logo.svg" className="w-[93px]" alt="" />
      <button
        className="burger relative z-[99]"
        id="hamburger"
        onClick={(e) => {
          e.target.classList.toggle("active");
          const menu = document.querySelector('.menu')
          menu.classList.toggle('active')
        }}
      ></button>
    </div>
  );
};

export default Header;
