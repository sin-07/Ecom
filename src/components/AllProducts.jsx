import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsCategory, setproductsCategory] = useState([]);
  const [selectProduct, setSelectProduct] = useState("");
  const [ShowAllProduct, setShowAllProduct] = useState([]);
  const [afterselect, setAfterselect] = useState(false);

  // screen pe products show krna hai to..
  useEffect(() => {
    const showAllproducts = async () => {
      try {
        const res = await axios("https://dummyjson.com/products");
        setShowAllProduct(res.data.products);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    showAllproducts();
  }, []);

  {
    /* products mai kya kya hai */
  }

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

  //  jo product hum search kar chuke hai usko screen par show karne ke liye
  const filterProducts = (allItems) => {
    setAfterselect(true)
    setSelectProduct(allItems);
    
  };

  // ek products mai kitni company ki variety hai wo hume category se milega

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
          {/* // products mai kya kya hai */}
          <div className="flex flex-wrap justify-center gap-1">
            <select
              name=""
              id=""
              onChange={(e) => filterProducts(e.target.value)}
            >
              <option>Search products</option>
              {products
                .filter(
                  (filterItems) =>
                    ![
                      "motorcycle",
                      "skin-care",
                      "kitchen-accessories",
                    ].includes(filterItems)
                )
                .map((allItems, i) => (
                  <option key={i} value={allItems}>
                    {allItems}
                  </option>
                ))}
            </select>
          </div>
          {/* // ek products mai kitni company ki variety hai wo hume
          productsCategory se milega */}
          {afterselect ? (
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
          ) : (
            <div className="flex flex-wrap justify-center gap-2">
              {ShowAllProduct.map((showingProducts, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-t-2xl hover:shadow-xl transition-all duration-500 ease-in-out overflow-hidden"
                >
                  <img
                    src={showingProducts.thumbnail}
                    alt=""
                    className="object-cover bg-black object-center w-full block"
                  />
                  <div>
                    <p>{showingProducts.brand}</p>
                    <p>{showingProducts.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* screen pe products dikhane k liye */}
        </div>
      </Layout>
    </>
  );
};

export default AllProducts;
