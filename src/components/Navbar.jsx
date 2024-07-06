import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { GiSkullCrossedBones } from "react-icons/gi";

function Navbar() {
  const [isShow, setisShow] = useState(false);
  const toggle = () => {
    if (isShow === false) {
      setisShow(true);
    } else {
      setisShow(false);
    }
  };
  // const toggleOff = ()=>{
  //   setIsOpen(false)
  // }

  return (
    <>
      <header className="bg-slate-50 border-b border-gray-200 shadow-md relative">
        <div className="container mx-auto p-5 flex justify-between items-center">
          <div>
            <Link to="/">
              <h3 className="text-2xl font-bold">
                my<span className="text-red-500">Shop</span>
              </h3>
            </Link>
          </div>

          <div className="md:block hidden">
            <ul className="flex items-center justify-center gap-5">
              <Link to="/">
                <li className=" cursor-pointer hover:text-gray-400 font-semibold">
                  Home
                </li>
              </Link>
              <Link to="/AllProducts">
                <li className=" cursor-pointer hover:text-gray-400 font-semibold">
                  AllProducts
                </li>
              </Link>
              <li className=" cursor-pointer hover:text-gray-400 font-semibold">
                Home
              </li>
              <li className=" cursor-pointer hover:text-gray-400 font-semibold">
                Home
              </li>
              <li className=" cursor-pointer hover:text-gray-400 font-semibold">
                Home
              </li>
            </ul>
          </div>

          {isShow ? (
            <div className="">
              <ul className="absolute flex-col z-10 bg-red-400 top-[74px] left-0 h-screen w-full items-center justify-center gap-5 text-center ">
                <Link to="/">
                  <li className=" cursor-pointer hover:text-gray-400 font-semibold mt-6">
                    Home
                  </li>
                </Link>
                <Link to="/AllProducts">
                  <li className=" cursor-pointer hover:text-gray-400 font-semibold mt-6">
                    AllProducts
                  </li>
                </Link>
                <li className=" cursor-pointer hover:text-gray-400 font-semibold mt-6">
                  Home
                </li>
                <li className=" cursor-pointer hover:text-gray-400 font-semibold mt-6">
                  Home
                </li>
                <li className=" cursor-pointer hover:text-gray-400 font-semibold mt-6">
                  Home
                </li>
              </ul>
              <GiSkullCrossedBones
                onClick={toggle}
                size={25}
                className="absolute z-10 top-[80px] right-4"
              />
            </div>
          ) : (
            ""
          )}

          <div className="flex items-center justify-center gap-5">
            <Link to="/Login">
            <button className=" cursor-pointer hover:text-white hover:bg-black duration-500 ease-in-out font-semibold border px-2 py-1 rounded-md bg-white">
              Login
            </button>
            </Link>
            <Link to="/cart">
              <FaCartShopping size={23} />
            </Link>
            {isShow ? (
              ""
            ) : (
              <FaHamburger
                size={23}
                className="block md:hidden"
                onClick={toggle}
              />
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
