import React from "react";
import { Link } from "react-router-dom";
import "./Order.css";
export const Order = () => {
  return (
    <>
      <div className="order">
        <div className="container-o">
          <h1>Điền thông tin đơn đặt hàng</h1>
          <div className="input-data">
            <input type="text" id="name" required />
            <div className="underline"></div>
            <label>Họ và tên </label>
          </div>
          <div className="input-data">
            <input type="number" id="name" required />
            <div className="underline"></div>
            <label>Số điện thoại </label>
          </div>
          <div class="input-data">
            <input type="text" id="text" required />
            <div className="underline"></div>
            <label>Địa Chỉ Giao Hàng</label>
          </div>

          <button type="submit">Tiếp tục</button>
        </div>
      </div>
    </>
  );
};
