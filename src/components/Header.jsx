import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-2 h-14 text-center shadow-lg bg-red-100">
      <div className="flex col-span-1 items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
          alt="logo"
          className=" h-8 cursor-pointer"
        />
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
            className="h-8 mix-blend-color-burn px-2 py-1 mx-3 cursor-pointer"
          />
        </a>
      </div>
      <div className=" col-span-10 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className=" border border-gray-400 w-1/2 px-5 py-2 rounded-l-full"
        />
        <button className=" border border-gray-400 bg-gray-100 py-2 rounded-r-full px-5">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <img
          alt="user-icon"
          src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-qxsb84gy.png"
          className="h-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
