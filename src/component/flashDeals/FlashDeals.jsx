import React from "react";
import { FlashCard } from "./FlashCard";

export const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt">
              <h1>Flash Deals</h1>
            </i>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};
