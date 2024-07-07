import React from "react";
import g1 from "/g1.jpg";
import g2 from "/g2.jpg";
import g3 from "/g3.jpg";
import g4 from "/g4.jpg";
import g5 from "/g5.jpg";
import g6 from "/g6.jpg";

function Gallery() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto flex flex-wrap">
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500"
                  src={g1}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={g2}
                />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src={g3}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src={g4}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={g5}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={g6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
