import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

function Service() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-center gap-10 px-5 pt-16">
        <div className="flex justify-center items-center gap-2 w-[12rem] px-3 py-5 rounded-md bg-red-400 shadow-md">
          <FaShippingFast />
          <p>FREE SHIPPING</p>
        </div>

        <div className="flex justify-center items-center gap-2 w-[12rem] px-3 py-5 rounded-md bg-red-400 shadow-md">
          <FaShippingFast />
          <p>FREE SHIPPING</p>
        </div>

        <div className="flex justify-center items-center gap-2 w-[12rem] px-3 py-5 rounded-md bg-red-400 shadow-md">
          <FaShippingFast />
          <p>FREE SHIPPING</p>
        </div>

        <div className="flex justify-center items-center gap-2 w-[12rem] px-3 py-5 rounded-md bg-red-400 shadow-md">
          <MdPayment />
          <p>FREE SHIPPING</p>
        </div>
      </div>
    </>
  );
}

export default Service;
