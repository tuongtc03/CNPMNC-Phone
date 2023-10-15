import React from "react";
import { Link } from "react-router-dom";
import "./order.css";
export const Order = () => {
  return (
    <>
      <div className="container-o product">
        <form className="form-o">
          <h1 className="title-o">Điền thông tin đơn đặt hàng</h1>
          <div className="input-data d_flex">
            <input type="text" id="name" required />
            <div className="underline"></div>
            <label>Họ và tên: </label>
          </div>
          <div className="input-data d_flex">
            <input type="number" id="name" required />
            <div className="underline"></div>
            <label>Số điện thoại: </label>
          </div>
          <div class="input-data d_flex">
            <input type="text" id="text" required />
            <div className="underline"></div>
            <label>Địa Chỉ Giao Hàng:</label>
          </div>
          <div className="btn-o">
            <button type="submit">Tiếp tục</button>
          </div>
        </form>
      </div>
    </>
  );
};
