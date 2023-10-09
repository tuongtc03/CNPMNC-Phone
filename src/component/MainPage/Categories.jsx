import React from "react";

export const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/phone.png",
      cateName: "Điện thoại",
    },
    {
      cateImg: "./images/category/laptop.webp",
      cateName: "Laptop",
    },
    {
      cateImg: "./images/category/tablet.webp",
      cateName: "Tablet",
    },
    {
      cateImg: "./images/category/accessory.png",
      cateName: "Phụ kiện",
    },
    {
      cateImg: "./images/category/smartwatch.webp",
      cateName: "Smartwatch",
    },
    {
      cateImg: "./images/category/watch.webp",
      cateName: "Đồng hồ",
    },
    {
      cateImg: "./images/category/webcam.png",
      cateName: "Webcam",
    },
    {
      cateImg: "./images/category/speaker.png",
      cateName: "Loa",
    },
    {
      cateImg: "./images/category/headphone.png",
      cateName: "Tai nghe",
    },
    {
      cateImg: "./images/category/mouse.png",
      cateName: "Chuột",
    },
    {
      cateImg: "./images/category/keyboard.png",
      cateName: "Bàn phím",
    },
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
