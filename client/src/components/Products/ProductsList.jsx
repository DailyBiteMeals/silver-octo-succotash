import React, { useState } from "react";
import { Link } from "react-router-dom";
import { initialProducts, categoriesWithDescription } from "./ProductsData";

import allproductsimage from "../../assets/Home-products/daily-meals.png";

const ProductsList = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = initialProducts.filter(
    (product) =>
      selectedCategory === "" || product.category === selectedCategory
  );

  return (
    // Categories Section

    <div className="container mx-auto w-full px-20">
      <div className="flex justify-center space-x-4 my-4">
        <button
          className={`${
            selectedCategory === ""
              ? "bg-mainOrange text-white text-2xl"
              : "bg-mainOrange text-white text-2xl"
          } relative py-2 px-4 rounded-md bg-mainOrange w-full sm:w-1/2 md:w-1/5 h-40`}
          onClick={() => filterProducts("")}
        >
          <div className="absolute top-2 left-2 text-white font-ExtraCondensedBlack w-16 uppercase text-left text-5xl leading-10 z-10">
            Our All Products
          </div>
          <img
            src={allproductsimage}
            alt="All Products of dailyBite"
            className="absolute bottom-0 right-0 w-36 object-cover"
          />
        </button>
        {categoriesWithDescription.map((categoryData, index) => (
          <button
            key={index}
            className={`relative py-2 px-4 rounded-md w-full sm:w-1/2 md:w-1/5 h-40`}
            style={{ backgroundColor: categoryData.color }}
            onClick={() => filterProducts(categoryData.name)}
          >
            <div className="absolute top-2 left-2 text-white font-ExtraCondensedBlack w-16 uppercase text-5xl leading-10 text-left z-10">
              {categoryData.name}
            </div>
            <img
              src={categoryData.imageUrl}
              alt={categoryData.name}
              className="absolute bottom-0 right-0 w-40 object-cover"
            />
          </button>
        ))}
      </div>

      {/* List of Products */}
      {categoriesWithDescription.map((categoryData) => (
        <div
          key={categoryData.name}
          className={`${
            selectedCategory !== "" && selectedCategory !== categoryData.name
              ? "hidden"
              : "block"
          }`}
        >
          <div className="text-4xl font-ExtraCondensedBlack text-DailybiteDarkChocolaty mb-2 text-center uppercase ">
            {categoryData.name}
          </div>
          <p className="mb-4 text-base font-InterMedium text-center ">
            {categoryData.description}
          </p>
          <div className="grid grid-cols-3 gap-4 py-4">
            {filteredProducts
              .filter((product) => product.category === categoryData.name)
              .map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="w-full"
                >
                  <div className="bg-DailyBiteWhitish rounded-lg p-4 rounded-md cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover rounded-lg"
                    />
                    <h3 className="text-3xl font-ExtraCondensedBold z-10">
                      {product.title}
                    </h3>
                    <p className="text-base leading-5 font-InterMedium text-left text-DailyBiteDarkChocolaty">
                      {product.includes}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
