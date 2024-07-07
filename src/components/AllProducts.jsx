import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsCategory, setproductsCategory] = useState([]);
  const [selectProduct, setSelectProduct] = useState("");
  const [selectTop, setSelectTop] = useState("");

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/category-list");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);

  const filterProducts = (allItems) => {
    console.log(allItems);
    setSelectProduct(allItems);
    
  };
 

  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        if (selectProduct) {
          const res = await axios(
            `https://dummyjson.com/products/category/${selectProduct}`
          );
          setproductsCategory(res.data.products);
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllProductsCategory();
  }, [selectProduct]);

  return (
    <>
      <Layout>
        <div className="min-h-screen">
          <div className="flex flex-wrap justify-center gap-1">
            {products.map((allItems, i) => (
              <div key={i} className="">
                <button
                  className="bg-black text-white px-3 py-2 rounded-md my-1"
                  onClick={() => filterProducts(allItems)}
                >
                  {allItems}
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center text-center gap-2 mt-2">
            {productsCategory.map((allCategory, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-t-2xl hover:shadow-xl transition-all duration-500 ease-in-out overflow-hidden"
              >
                <img
                  src={allCategory.thumbnail}
                  alt=""
                  className="object-cover bg-black object-center w-full block"
                />

                <div className="bg-slate-200 rounded-tl-3xl">
                  <p>{allCategory.brand}</p>
                  <p>{allCategory.price}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AllProducts;
