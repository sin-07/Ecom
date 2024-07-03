import React from "react";


function Hero() {
  return (
    <>
      <div className="relative">
        <div>
          <img src="./banner.jpg" alt="" className="md:h-screen h-[50vh] w-full object-cover object-center"/>
        </div>
        <div className="absolute top-[50%] right-7">
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla provident eligendi tempore non maiores incidunt ad sequi mollitia dolores ipsum.</h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
