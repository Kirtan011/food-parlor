import { useState } from "react";

const NavBar = ({ activeTab, onTabChange }) => {
  const menuItems = ["Main Menu", "Breakfast", "Dinnermenu", "Lunch Menu"];

  return (
    <div className="flex flex-col w-full bg-white shadow-sm font-sans">
      {/* Top Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-center p-4 border-b border-gray-100 gap-4 lg:gap-0">
        {/* Left: Logo & Restaurant Info */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <img
            alt="Shop Logo"
            className="h-14 w-14 rounded-lg object-cover border border-gray-100 shadow-sm"
            src="https://www.foodchow.com/LogoImages/3161_2026-01-08_13-41-040e2d34b97-0b3b-4d7b-9b46-1bfe956f76a6.jpg"
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              FoodChow Demo India
            </h3>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-3 w-3 fill-current text-gray-400"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <span>Surat, Gujarat, Australia</span>
            </div>
          </div>
        </div>

        {/* Center: Status & Timing */}
        <div className="flex flex-col items-center lg:items-end gap-1 w-full lg:w-auto mt-2 lg:mt-0">
          <div className="flex items-center gap-2">
            <p className="text-[#009688] font-bold text-base">
              Restaurant is Open
            </p>
            <div title="More info" className="cursor-pointer">
              <svg
                viewBox="0 0 512 512"
                className="h-4 w-4 fill-black opacity-60 hover:opacity-100 transition-opacity"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
              </svg>
            </div>
          </div>
          <p className="text-gray-400 text-xs font-medium">
            Timing: Open 24 hours
          </p>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 mt-4 lg:mt-0 w-full lg:w-auto justify-center lg:justify-end flex-wrap">
          {/* Restart & Table Group */}
          <div className="flex shadow-sm rounded-md h-9">
            <button className="px-3 md:px-4 bg-white border border-r-0 border-gray-300 rounded-l-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Restart
            </button>
            <div className="px-3 md:px-4 bg-black text-white text-sm font-semibold rounded-r-md flex items-center">
              Table : d3
            </div>
          </div>

          {/* Lang & Phone */}
          <div className="flex gap-3 h-9">
            <button className="flex items-center gap-2 px-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-sm font-semibold text-gray-700 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3 fill-current"
              >
                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-42c12.7 0 24.9 5.1 33.9 14.1l3.9 3.9c9 9 14.1 21.2 14.1 33.9v8.3c0 17.2-9.2 33.2-24.2 41.7l-8.1 4.6c-15.1 8.6-26.1 23.1-30.3 40l-2.8 11.2c-4.1 16.3-16.6 29.2-32.7 33.8c-15 4.3-29.9-7-29.9-22.6v-39c0-11-6.2-21-16-25.9s-16-14.9-16-25.9v-39.9c0-17.9 11.8-33.6 29-38.5l57.9-16.5c16.1-4.6 29.6-15.3 38-29.8l9.4-16.4c26.7-84.1 105.4-145 198.2-145c3.5 0 6.9 .1 10.4 .3l2.4 4.2c6.7 11.7 5.3 26.4-3.5 36.7l-15.7 18.3c-10.2 11.8-10.3 29.3-.3 41.3l13.6 16.3c5.4 6.5 5.9 15.8 1.2 22.8c-4.7 7.1-13.7 10.2-21.9 7.5l-23.2-7.7c-7-2.4-14.7-1.8-21.3 1.5l-5.9 3c-9.1 4.5-13.4 14.9-10.2 24.5c1.6 4.7 4.9 8.7 9.2 11.2l34.5 19.7c9.7 5.5 20.7 8.4 31.8 8.4zm208-42c2.4-13.3-2.5-27-12.7-36.8L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM448 464c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96C157.2 6.1 136.9-3.8 117.5 1.5L29.5 25.5C10.1 30.8-.2 50.7 .0 70.8c.4 145.4 75.8 277.6 195.9 369.3s223.9 195.5 369.3 195.9c20.1 .2 40-10.1 45.3-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40zM47.9 66.5C48 65.6 48 64.8 48 64c0-8.8 7.2-16 16-16c8.8 0 16 7.2 16 16v0 0 0 0 .5 .5 .6 0 .5 .5 1.1 1.7 4.5c2.3 2.9 2.5 7 .5 10.2l-40 96c-2 3.2-5.9 4.8-9.5 3.8L5.5 151C1.9 150 .4 145.8 2.5 142.7l45.4-76.2z" />
              </svg>
              en
            </button>
            <a
              href="tel:7016997342"
              className="flex items-center gap-2 px-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-sm font-semibold text-gray-700 transition-colors whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3 fill-current"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              7016997342
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Tabs */}
      <div className="flex overflow-x-auto no-scrollbar pb-1 pt-1 gap-6 border-b border-gray-100 bg-white md:pl-4">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => onTabChange(item)}
            className={`whitespace-nowrap px-2 py-3 text-[15px] font-bold border-b-[3px] transition-all rounded-t-sm ${
              activeTab === item
                ? "border-[#009688] text-[#009688]"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
