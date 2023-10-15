import React from "react";
import { Link } from "react-router-dom";

export const Categories = () => {
  const data = [
    {
      cateId: 1,
      cateImg: "./images/category/phone.png",
      cateName: "Điện thoại",
    },
    {
      cateId: 2,
      cateImg: "./images/category/laptop.webp",
      cateName: "Laptop",
    },
    {
      cateId: 3,
      cateImg: "./images/category/tablet.webp",
      cateName: "Tablet",
    },
    {
      cateId: 4,
      cateImg: "./images/category/watch.webp",
      cateName: "Đồng hồ",
    },
  ];
  return (
    <>
      <div className="category">
        {data.map((value) => {
          let toPath;
          if (value.cateId == 1) {
            toPath = "/phone";
          } else if (value.cateId == 2) {
            toPath = "/laptop";
          } else if (value.cateId == 3) {
            toPath = "/tablet";
          } else if (value.cateId == 4) {
            toPath = "/watch";
          }

          return (
            <Link to={toPath} key={value.cateId}>
              <div className="box f_flex">
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
