import React from "react";

function Footer() {
  return (
    <>
      <footer  >
        <div className="w-full bg-black text-white">
          <div className="px-5 container mx-auto flex justify-between items-center md:flex-row flex-col md:flex-nowrap flex-wrap md:text-left text-center ">
            <div>
              <h3 className="text-2xl font-bold">
                my<span className="text-red-500">Shop</span>
              </h3>
            </div>

            <div className="py-4 md:w-[70%]  w-[10%] flex justify-between flex-wrap text-center">
              <div classname="text-center">
                <h2 className="text-2xl font-bold">Menu</h2>
                <ul className="text-center">
                  <li className="font-semibold">login</li>
                  <li className="font-semibold">login</li>
                  <li className="font-semibold">login</li>
                  <li className="font-semibold">login</li>
                </ul>
              </div>
              <div classname="text-center">
                <h2 className="text-2xl font-bold">Menu</h2>
                <ul className="text-center">
                  <li className="font-semibold">login</li>
                  <li className="font-semibold">login</li>
                  <li className="font-semibold">login</li>
                  <li className="font-semibold">login</li>
                </ul>
              </div>
              <div classname="text-center">
                <h2 className="text-2xl font-bold">Menu</h2>
                <ul className="text-center">
                  <li className="font-semibold">login</li>
                  <li className="font-semibold">login</li>
                  <li className="font-semibold">login</li>
                  <li className="font-semibold">login</li>
                </ul>
              </div>
              <div classname="text-center">
                <h2 className="text-2xl font-bold">Menu</h2>
                <ul className="text-center">
                  <li className="font-semibold">login</li>
                  <li className="font-semibold">login</li>
                  <li className="font-semibold">login</li>
                  <li className="font-semibold">login</li>
                </ul>
              </div>
             
            </div>
          </div>
          
        </div>
        <div className="bg-gray-500 flex justify-around items-center">
            <p>copyright 2024</p>
            <ul className="flex gap-10 p-5">
              <li>fb</li>
              <li>fb</li>
              <li>fb</li>
              <li>fb</li>
            </ul>
          </div>
      </footer>
    </>
  );
}

export default Footer;
