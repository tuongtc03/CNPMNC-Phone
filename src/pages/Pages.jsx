import React from "react";
import { Home } from "../component/MainPage/Home";
import { FlashDeals } from "../component/flashDeals/FlashDeals";
import { TopCate } from "../component/top/TopCate";

export const Pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
    </>
  );
};
