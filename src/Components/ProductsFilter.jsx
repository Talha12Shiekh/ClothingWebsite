import React, { useState } from "react";
import "bootstrap";
import "../App.css";
import { FILTER_ITEMS } from "../data/Data";
import { PRODUCTS } from "../data/Data";

const ProductsFilter = ({ setproducts }) => {
  const [active, setactive] = useState(0);

  function handleFilterProduct(filteritem) {
    if (filteritem == "All") {
      setproducts(PRODUCTS);
    } else {
      const FilteredProducts = PRODUCTS.filter(
        ({ category }) => category == filteritem
      );
      setproducts(FilteredProducts);
    }
  }

  return (
    <section className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
      <div>
        <h3 className="monteserrat products_heading position-relative">
          NEW PRODUCT
        </h3>
      </div>
      <div className="d-flex flex-column align-self-start flex-sm-row mt-5 mt-lg-0">
        {FILTER_ITEMS.map(({ text, key }, index) => {
          return (
            <p
              onClick={() => {
                setactive(index);
                handleFilterProduct(text);
              }}
              role="button"
              className={`mx-2 mx-sm-3 mx-md-4 product_item ${
                active == index ? "active" : ""
              } position-relative monteserrat`}
              key={key}
            >
              {text}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsFilter;
