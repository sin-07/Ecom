import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <header className="bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto md:p-5 flex justify-between items-center">
            <div>
              <Link to='/'><h3 className="text-2xl font-bold">my<span className="text-red-500">Shop</span></h3></Link>
            </div>
          
          <ul className="flex items-center justify-center gap-5" >
            <Link to='/'><li className=" cursor-pointer hover:text-gray-400 font-semibold">Home</li></Link>
            <li className=" cursor-pointer hover:text-gray-400 font-semibold">Home</li>
            <li className=" cursor-pointer hover:text-gray-400 font-semibold">Home</li>
            <li className=" cursor-pointer hover:text-gray-400 font-semibold">Home</li>
          </ul>

          <div className="flex items-center justify-center gap-5">
            <button className=" cursor-pointer hover:text-white hover:bg-black duration-500 ease-in-out font-semibold border px-2 py-1 rounded-md bg-white">Login</button>
            <Link to='/cart'><FaCartShopping /></Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
