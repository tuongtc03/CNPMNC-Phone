import React from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";
export const ProductDetail = ({ addToCart, productItems, decreaseQty }) => {
  const { id } = useParams();

  const product = productItems.find((item) => item.id == id);

  const { discount, cover, description, name, price } = product;
  // {product.cover}
  return (
    <>
      <div className="wrapper-pd">
        <div className="product mtop d_flex">
          <div className="img">
            <span className="discount">{discount}% Off</span>
            <img src={cover} alt={name} />
          </div>
          <div className="product-info">
            <h2>{name}</h2>
            <div className="rate">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="desc">
              <p>{description}</p>
            </div>
            <div className="price-pd">
              <h4>{price}$</h4>
            </div>
            <button onClick={() => addToCart(product)}>
              <span>Thêm vào giỏ hàng</span>
            </button>
          </div>
        </div>
      </div>
      <div className="wrapper-pd">
        <h2>Đánh giá sản phẩm</h2>
        <hr />
        <div className="product mtop d_flex">
          <div>
            <div className="pd-item username">Username</div>
            <div className="rate pd-item">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="pd-item">Description</div>
        </div>
      </div>
    </>
  );
};
