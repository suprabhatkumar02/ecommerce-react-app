import React, { useState } from "react";
import { useProductsContext } from "../context/ProductsContext";

export const ProductsFilter = () => {
  const { productsList } = useProductsContext();
  const productCategory = [
    "all",
    ...new Set(productsList?.map((item) => item.category)),
  ];
  const [category, setCategory] = useState("all");
  const onCategoryChange = (e) => {
    setCategory(e.target.value);
    const filteredArray = productsList.filter(
      (item) => item.category === category
    );
    console.log(filteredArray);
  };
  return (
    <div className="allFiltersWrapper">
      {productCategory && (
        <fieldset>
          <legend>Category Filter</legend>
          {productCategory.map((item) => (
            <div key={item}>
              <input
                type="radio"
                id={item}
                name={`categoryFilter`}
                value={item}
                checked={category === item}
                onChange={onCategoryChange}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </fieldset>
      )}
    </div>
  );
};
