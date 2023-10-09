import React, { useState } from "react";


export const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () =>{
    setCount(count + 1)
  }

  return (
    <>
        {shopItems.map((shopItems) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{shopItems.discount}% Off</span>
                  <img src={shopItems.cover} alt="" />
                  <div className="product-like">
                    <label>0</label>
                    <br />
                    <i className="fa-regular fa-heart" onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{shopItems.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{shopItems.price}$</h4>
                    <button>
                      <span>Chi tiết</span>
                    </button>
                    <button onClick={() => addToCart(shopItems)}>
                      {/* <i className="fa fa-plus"></i> */}
                      <span>Mua ngay</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

