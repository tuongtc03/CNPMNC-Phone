import React from "react";
import "./style.css";

export const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "Worldwide Delivery",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "Safe Payment",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: "Shop With Confidence ",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: "24/7 Support ",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <>
                <div className="product" key={index}>
                  <div className="img icon-circle">
                    <i>{val.cover}</i>
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
